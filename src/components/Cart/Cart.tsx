import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useNotifications } from "reapop";
import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import fetch from "isomorphic-unfetch";
import { format, endOfDay } from "date-fns";

import client from "~/apollo-client";
import useTranslation from "~/intl/useTranslation";
import {
  TCartProduct,
  TAdditional,
  useStore,
  setAgree,
  setAgreeError,
  setCutleryAmountError,
  setCustomerAddressError,
  setCustomerNameError,
  setCustomerPhoneError,
  setCustomerEmailError,
  TPayment,
} from "~/store";
import { Additionals } from "./Additionals";
import { Delivery } from "./Delivery";
import { Payment } from "./Payment";
import { Products } from "./Products";
import { Persons } from "./Persons";
import { SvgLoaderIcon, SvgExclamationIcon } from "~/icons";
import { StyledContainer } from "~/components/Layout/styled";
import {
  StyledForm,
  StyledTotal,
  StyledEmptyImage,
  StyledEmpty,
  StyledButtons,
  StyledBuy,
  StyledBuyLoader,
  StyledLayout,
  StyledCheckbox,
  StyledAgree,
  StyledLabel,
  StyledLabelLink,
  StyledErrorIcon,
  StyledMainPageLink,
} from "./styled";

const createOrderMutation = gql`
  mutation CreateOrderMutation($createOrderInput: createOrderInput) {
    createOrder(input: $createOrderInput) {
      order {
        id
        price
      }
    }
  }
`;

const updatePromoMutation = gql`
  mutation UpdatePromoMutation($updateOrderInput: updatePromoInput) {
    updatePromo(input: $updateOrderInput) {
      promo {
        id
      }
    }
  }
`;

const validateEmail = (email: string) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const Cart: React.FC = () => {
  const router = useRouter();
  const [submitOrderLoading, toggleSubmitOrderLoading] =
    useState<boolean>(false);
  const { notify } = useNotifications();
  const { t } = useTranslation();
  const { dispatch, store } = useStore();
  const { cart } = store;
  const {
    additionals,
    isAgreeChecked,
    isAgreeCheckedError,
    isPickupChecked,
    totalRollsDiscount,
    deliveryPrice,
    deliveryError,
    cutleryAmount,
    cutleryPrice,
    customerAddress,
    customerName,
    customerPhone,
    customerEmail,
    customerNote,
    paymentType,
    products,
    promoCode,
  } = cart;

  const [createOrder] = useMutation(createOrderMutation, {
    client,
  });

  const [updatePromo] = useMutation(updatePromoMutation, {
    client,
  });

  const selectedAdditionals = additionals.filter(
    ({ quantity }: TAdditional) => quantity !== undefined && quantity !== 0
  );

  const addedProductsPrice: number[] = cart.products.map(
    ({ totalPrice }: TCartProduct): number => totalPrice
  );

  const addedAdditionalsPrice: number[] = cart.additionals.map(
    ({ price, quantity = 0 }: TAdditional) => price * quantity
  );

  const totalProductsPrice = addedProductsPrice.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    0
  );

  const totalAdditionalsPrice = addedAdditionalsPrice.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    0
  );

  const totalRollsAdded = products.filter(
    ({ isRoll }: TCartProduct): boolean => isRoll
  );

  const totalSetsAdded = products.filter(
    ({ isSet }: TCartProduct): boolean => isSet
  );

  const totalDrinksAdded = products.filter(
    ({ isDrink }: TCartProduct): boolean => isDrink
  );

  const totalStartersAdded = products.filter(
    ({ isStarter }: TCartProduct): boolean => isStarter
  );

  const totalPokeAdded = products.filter(
    ({ isPoke }: TCartProduct): boolean => isPoke
  );

  const totalRollsAmount = totalRollsAdded.reduce(
    (accumulator: number, { quantity }: TCartProduct) => {
      return accumulator + quantity;
    },
    0
  );

  const totalSetsAmount = totalSetsAdded.reduce(
    (accumulator: number, { quantity }: TCartProduct) => {
      return accumulator + quantity;
    },
    0
  );

  const totalDrinksAmount = totalDrinksAdded.reduce(
    (accumulator: number, { quantity }: TCartProduct) => {
      return accumulator + quantity;
    },
    0
  );

  const totalStartersAmount = totalStartersAdded.reduce(
    (accumulator: number, { quantity }: TCartProduct) => {
      return accumulator + quantity;
    },
    0
  );

  const totalPokeAmount = totalPokeAdded.reduce(
    (accumulator: number, { quantity }: TCartProduct) => {
      return accumulator + quantity;
    },
    0
  );

  const maxCutleryAmount =
    totalRollsAmount +
    totalSetsAmount * 4 +
    totalDrinksAmount +
    totalStartersAmount +
    totalPokeAmount;

  const totalPrice = promoCode.promoCodeSuccess
    ? Math.round(
        totalProductsPrice +
          totalAdditionalsPrice +
          cutleryPrice +
          deliveryPrice -
          totalRollsDiscount -
          ((totalProductsPrice +
            totalAdditionalsPrice +
            cutleryPrice +
            deliveryPrice -
            totalRollsDiscount) *
            promoCode.percent) /
            100
      )
    : totalProductsPrice +
      totalAdditionalsPrice +
      cutleryPrice +
      deliveryPrice -
      totalRollsDiscount;

  const totalOrderPrice =
    totalPrice - (isPickupChecked && totalPrice > 600 ? 50 : 0);

  const scrollToError = (elementId: string): void => {
    if (window.innerWidth > 767) {
      document.getElementById(elementId).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const checkCartFields = (): boolean => {
    if (!isPickupChecked && deliveryPrice === 100 && totalPrice < 400) {
      notify({
        dismissAfter: 3000,
        dismissible: true,
        position: "bottom-center",
        showDismissButton: true,
        status: "error",
        title: `Min. cena objednávky od 6km. - 400 Kč (bez ceny dopravy)`,
      });
      scrollToError("products");
      return;
    }

    if (!isPickupChecked && deliveryPrice === 0 && totalPrice < 250) {
      notify({
        dismissAfter: 3000,
        dismissible: true,
        position: "bottom-center",
        showDismissButton: true,
        status: "error",
        title: `Min. cena objednávky do 3km. - 250 Kč (bez ceny dopravy)`,
      });
      scrollToError("persons");
      return;
    }

    if (
      !isPickupChecked &&
      deliveryPrice >= 50 &&
      totalPrice - deliveryPrice < 300
    ) {
      notify({
        dismissAfter: 3000,
        dismissible: true,
        position: "bottom-center",
        showDismissButton: true,
        status: "error",
        title: `Min. cena objednávky od 3km. - 300 Kč (bez ceny dopravy)`,
      });
      scrollToError("persons");
      return;
    }

    if (!isAgreeChecked) {
      dispatch(setAgreeError(true));
    } else {
      dispatch(setAgreeError(false));
    }

    if (cutleryAmount === 0 && maxCutleryAmount > 0) {
      dispatch(setCutleryAmountError(true));
    } else {
      dispatch(setCutleryAmountError(false));
    }

    if (!/\d/.test(customerAddress) && !isPickupChecked) {
      dispatch(setCustomerAddressError(true));
    } else {
      dispatch(setCustomerAddressError(false));
    }

    if (customerAddress.length === 0 && !isPickupChecked) {
      dispatch(setCustomerAddressError(true));
    } else {
      dispatch(setCustomerAddressError(false));
    }

    if (validateEmail(customerEmail)) {
      dispatch(setCustomerEmailError(false));
    } else {
      dispatch(setCustomerEmailError(true));
    }

    if (customerName.length === 0) {
      dispatch(setCustomerNameError(true));
    } else {
      dispatch(setCustomerNameError(false));
    }

    if (customerPhone.length === 0) {
      dispatch(setCustomerPhoneError(true));
    } else {
      dispatch(setCustomerPhoneError(false));
    }

    if (cutleryAmount === 0 && maxCutleryAmount > 0) {
      notify({
        dismissAfter: 3000,
        dismissible: true,
        position: "bottom-center",
        showDismissButton: true,
        status: "error",
        title: `Zvolte množství příboru na osobu, minimálně 1`,
      });

      scrollToError("persons");
      return false;
    }

    if (!/\d/.test(customerAddress) && !isPickupChecked) {
      notify({
        dismissAfter: 3000,
        dismissible: true,
        position: "bottom-center",
        showDismissButton: true,
        status: "error",
        title: `Napište přesnou adresu s směrovacím číslem`,
      });

      scrollToError("persons");
      return false;
    }

    if (
      deliveryError ||
      customerPhone.length === 0 ||
      customerName.length === 0 ||
      customerEmail.length === 0 ||
      (customerAddress.length === 0 && !isPickupChecked)
    ) {
      notify({
        dismissAfter: 3000,
        dismissible: true,
        position: "bottom-center",
        showDismissButton: true,
        status: "error",
        title: `Vyplňte povinné údaje`,
      });

      scrollToError("persons");
      return false;
    }

    if (!isAgreeChecked) {
      notify({
        dismissAfter: 3000,
        dismissible: true,
        position: "bottom-center",
        showDismissButton: true,
        status: "error",
        title: `Souhlasíte s zpracováním a uchováním zásady ochrany osobních údajů`,
      });

      return false;
    }

    return true;
  };

  const handleAgreeChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    if (currentTarget.checked) {
      dispatch(setAgreeError(false));
    }

    dispatch(setAgree(currentTarget.checked));
  };

  const handleBuySubmit = (
    event: React.SyntheticEvent<HTMLFormElement>,
    name: string,
    comgateTransId: string,
    price: number
  ): void => {
    event.preventDefault();

    if (checkCartFields()) {
      toggleSubmitOrderLoading(true);

      if (promoCode.promoCodeSuccess) {
        updatePromo({
          variables: {
            updateOrderInput: {
              where: {
                id: promoCode.id,
              },
              data: {
                isApplied: true,
              },
            },
          },
        });
      }

      createOrder({
        variables: {
          createOrderInput: {
            data: {
              address: customerAddress,
              additionals: selectedAdditionals,
              cutleryAmount,
              cutleryAmountPaid: cutleryAmount - maxCutleryAmount,
              comgateTransId,
              comgatePaymentStatus:
                paymentType === TPayment.CASH ||
                paymentType === TPayment.CARDPICKUP
                  ? "PAID"
                  : "PENDING",
              dayCreated: format(endOfDay(new Date()), "yyyy-MM-dd"),
              deliveryPrice,
              email: customerEmail,
              phone: customerPhone,
              name,
              note: customerNote,
              paymentType,
              price,
              products,
            },
          },
        },

        onCompleted: (data) => {
          fetch(`/api/cart/order_${paymentType}`, {
            method: "POST",
            body: JSON.stringify({
              additionals: selectedAdditionals,
              address: customerAddress,
              cutleryAmount,
              cutleryAmountPaid: cutleryAmount - maxCutleryAmount,
              deliveryPrice,
              name: customerName,
              phone: customerPhone,
              email: customerEmail,
              note: customerNote,
              orderId: data["createOrder"]["order"]["id"],
              orderPrice: data["createOrder"]["order"]["price"],
              paymentType,
              products,
              promoCodeSuccess: promoCode.promoCodeSuccess,
              promoCodeDiscount: promoCode.percent,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              if (data) {
                router.push(data.redirect);
              }
            })
            .finally(() => {
              toggleSubmitOrderLoading(false);
            });
        },

        onError: () => {
          alert("Cannot create order");
        },
      });
    }
  };

  useEffect((): void => {
    router.replace({
      pathname: location.pathname,
      query: {},
    });
  }, []);

  return (
    <StyledForm
      action="#"
      autoComplete="on"
      onSubmit={(event) =>
        handleBuySubmit(event, customerName, "", totalOrderPrice)
      }
    >
      <StyledContainer>
        {cart && !!cart.products.length ? (
          <>
            <Products />

            <StyledLayout>
              <Delivery />
              <Persons />
              <Additionals />
              <Payment />
            </StyledLayout>

            <StyledAgree>
              {isAgreeCheckedError && (
                <StyledErrorIcon>
                  <SvgExclamationIcon />
                </StyledErrorIcon>
              )}

              <StyledCheckbox
                checked={isAgreeChecked}
                id="agree"
                onChange={handleAgreeChange}
                type="checkbox"
              />
              <StyledLabel htmlFor="agree">
                Souhlasíte s zpracováním a uchováním{" "}
                <Link href="/rules" passHref>
                  <StyledLabelLink>
                    zásady ochrany osobních údajů
                  </StyledLabelLink>
                </Link>
              </StyledLabel>
            </StyledAgree>
            <StyledTotal>
              {t("priceTotal")}: {totalOrderPrice} Kč
            </StyledTotal>

            <StyledButtons>
              <StyledBuy isLoading={submitOrderLoading} type="submit">
                {submitOrderLoading && (
                  <StyledBuyLoader>
                    <SvgLoaderIcon />
                  </StyledBuyLoader>
                )}
                {t("goToPay")}
              </StyledBuy>
            </StyledButtons>
          </>
        ) : (
          <StyledEmpty>
            <StyledEmptyImage alt="Sushi man" src="/images/sushi-man_img.jpg" />{" "}
            {t("cartIsEmpty")}
            <Link href="/" passHref>
              <StyledMainPageLink>Hlavní stránka</StyledMainPageLink>
            </Link>
          </StyledEmpty>
        )}
      </StyledContainer>
    </StyledForm>
  );
};

export { Cart };
