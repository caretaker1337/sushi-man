import React, { useEffect, useRef, useState } from "react";

import useTranslation from "~/intl/useTranslation";
import {
  TCartProduct,
  TAdditional,
  setPickup,
  setDeliveryPrice,
  setCustomerAddress,
  setCustomerName,
  setCustomerPhone,
  setCustomerEmailError,
  setDeliveryDistance,
  setDeliveryError,
  useStore,
  setCustomerEmail,
  setCustomerPhoneError,
  setCustomerNameError,
  setCustomerAddressError,
  setPaymentType,
  TPayment,
} from "~/store";
import {
  SvgAddressIcon,
  SvgEmailIcon,
  SvgExclamationIcon,
  SvgLoaderIcon,
  SvgPhoneIcon,
  SvgProfileIcon,
} from "~/icons";
import {
  StyledWrapper,
  StyledContent,
  StyledHeader,
  StyledInfo,
  StyledInfoIcon,
  StyledInfoLabel,
  StyledInputWrapper,
  StyledLayout,
  StyledTitle,
  StyledRadioWrapper,
  StyledRadioLabel,
  StyledRadioLabelInfo,
  StyledRadio,
  StyledInput,
  StyledInputIcon,
  StyledDeliveryInput,
  StyledLink,
  StyledMap,
  StyledLengthInKm,
  StyledDeliveryPrice,
  StyledDeliveryError,
  StyledErrorIcon,
  StyledDeliveryPriceResult,
  StyledTerms,
  StyledText,
  StyledTextPrice,
  StyledAddressLoader,
} from "./styled";

const validateEmail = (email: string) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const Delivery: React.FC = () => {
  const { t } = useTranslation();
  const { dispatch, store } = useStore();
  const { cart } = store;
  const addressInputElement = useRef(null);
  const mapElement = useRef(null);
  const [addressIsLoading, toggleAddressLoading] = useState<boolean>(false);

  const {
    additionals,
    customerAddressError,
    customerAddress,
    customerEmail,
    customerEmailError,
    customerName,
    customerNameError,
    customerPhone,
    customerPhoneError,
    isPickupChecked,
    totalRollsDiscount,
    deliveryPrice,
    products,
    deliveryDistance,
  } = cart;

  const addedProductsPrice: number[] = products.map(
    ({ totalPrice }: TCartProduct): number => totalPrice
  );

  const addedAdditionalsPrice: number[] = additionals.map(
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

  const totalPrice =
    totalProductsPrice +
    totalAdditionalsPrice +
    deliveryPrice -
    totalRollsDiscount;

  const handleDeliveryChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    const name = currentTarget.value;

    dispatch(setPickup(name === "pickup"));
  };

  const handlePhoneChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    if (currentTarget.validity.valid) {
      dispatch(setCustomerPhone(currentTarget.value));
    }

    if (currentTarget.value.length > 0) {
      dispatch(setCustomerPhoneError(false));
    }
  };

  const handleEmailChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    if (validateEmail(currentTarget.value)) {
      dispatch(setCustomerEmailError(false));
    } else {
      dispatch(setCustomerEmailError(true));
    }

    dispatch(setCustomerEmail(currentTarget.value));
  };

  const handleNameChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    if (currentTarget.value.length > 0) {
      dispatch(setCustomerNameError(false));
    }

    dispatch(
      setCustomerName(
        currentTarget.value.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      )
    );
  };

  const handleAddressChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    if (currentTarget.value !== customerAddress) {
      dispatch(setCustomerAddressError(true));
    } else {
      dispatch(setCustomerAddressError(false));
    }
  };

  useEffect((): void => {
    if (isPickupChecked) {
      dispatch(setCustomerAddress(""));
      dispatch(setDeliveryDistance(null));
      dispatch(setDeliveryPrice(null));
      return;
    }

    dispatch(setPaymentType(TPayment.CARD));

    const map = new google.maps.Map(mapElement.current, {
      disableDefaultUI: true,
      center: { lat: 50.08661, lng: 14.448785 },
      zoom: 13,
    });
    const input = addressInputElement.current;
    const autocomplete = new google.maps.places.Autocomplete(input, {
      componentRestrictions: { country: "cz" },
      types: ["address"],
    });
    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29),
    });

    autocomplete.addListener("place_changed", async () => {
      toggleAddressLoading(true);

      const place = autocomplete.getPlace();
      const response = await fetch("/api/cart/googlemaps", {
        method: "POST",
        body: JSON.stringify({
          destinations: `${place.geometry.location.lat()},${place.geometry.location.lng()}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).finally((): void => {
        toggleAddressLoading(false);
      });

      const data = await response.json();

      if (!place.geometry || !place.geometry.location) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      dispatch(setDeliveryDistance(data.lengthInKm));
      dispatch(setCustomerAddress(place.name));
      dispatch(setCustomerAddressError(false));
    });
  }, [isPickupChecked]);

  useEffect((): void => {
    dispatch(setDeliveryError(false));

    if (!isPickupChecked) {
      if (deliveryDistance <= 3) {
        dispatch(setDeliveryPrice(0));
      } else if (deliveryDistance > 3 && deliveryDistance <= 6) {
        dispatch(setDeliveryPrice(50));
      } else if (deliveryDistance > 6 && deliveryDistance <= 8) {
        dispatch(setDeliveryPrice(100));
      } else {
        dispatch(setDeliveryPrice(null));
        dispatch(setDeliveryError(true));
      }
    }
  }, [deliveryDistance]);

  useEffect((): void => {
    dispatch(setCustomerAddress(""));
    dispatch(setDeliveryDistance(null));
  }, []);

  return (
    <StyledWrapper>
      <StyledTitle>{t("delivery")}</StyledTitle>
      <StyledHeader>
        <StyledRadioWrapper>
          <StyledRadio
            checked={!isPickupChecked}
            id="input-delivery"
            name="delivery-pickup"
            onChange={handleDeliveryChange}
            type="radio"
            value="delivery"
          />
          <StyledRadioLabel htmlFor="input-delivery">
            {t("deliveryLabel")}
          </StyledRadioLabel>
        </StyledRadioWrapper>

        <StyledRadioWrapper>
          <StyledRadio
            checked={isPickupChecked}
            id="input-pickup"
            name="delivery-pickup"
            onChange={handleDeliveryChange}
            type="radio"
            value="pickup"
          />
          <StyledRadioLabel htmlFor="input-pickup">
            {t("pickupLabel")}{" "}
            {totalPrice > 500 && (
              <StyledRadioLabelInfo>-50Kč</StyledRadioLabelInfo>
            )}
          </StyledRadioLabel>
        </StyledRadioWrapper>
      </StyledHeader>

      <StyledLayout>
        {isPickupChecked ? (
          <StyledContent>
            <StyledInputWrapper>
              <StyledInputIcon>
                <SvgProfileIcon />
              </StyledInputIcon>

              <StyledInput
                hasError={customerNameError}
                name="name"
                onChange={handleNameChange}
                placeholder={customerNameError ? "Vyplňte jméno" : t("name")}
                type="text"
                value={customerName}
              />

              {customerNameError && (
                <StyledErrorIcon>
                  <SvgExclamationIcon />
                </StyledErrorIcon>
              )}
            </StyledInputWrapper>

            <StyledInputWrapper>
              <StyledInputIcon>
                <SvgEmailIcon />
              </StyledInputIcon>

              <StyledInput
                hasError={customerEmailError}
                name="email"
                onChange={handleEmailChange}
                placeholder={customerEmailError ? "Vyplňte e-mail" : t("email")}
                type="email"
                value={customerEmail}
              />

              {customerEmailError && (
                <StyledErrorIcon>
                  <SvgExclamationIcon />
                </StyledErrorIcon>
              )}
            </StyledInputWrapper>

            <StyledInputWrapper>
              <StyledInputIcon isSmall>
                <SvgPhoneIcon />
              </StyledInputIcon>

              <StyledInput
                hasError={customerPhoneError}
                maxLength={9}
                name="phone"
                onChange={handlePhoneChange}
                pattern="[0-9]*"
                placeholder={
                  customerPhoneError ? "Vyplňte telefon" : t("phone")
                }
                type="tel"
                value={customerPhone}
              />

              {customerPhoneError && (
                <StyledErrorIcon>
                  <SvgExclamationIcon />
                </StyledErrorIcon>
              )}
            </StyledInputWrapper>

            <StyledInfo>
              <StyledInfoLabel>
                <StyledInfoIcon>
                  <SvgAddressIcon />
                </StyledInfoIcon>
                {t("pickupAddress")}:
              </StyledInfoLabel>
              <StyledLink
                href="https://goo.gl/maps/r6Tf6xHVnu59bD9J9"
                target="_blank"
              >
                Husitská 187/60, Praha 3
              </StyledLink>
            </StyledInfo>
          </StyledContent>
        ) : (
          <StyledContent>
            <StyledInputWrapper>
              <StyledInputIcon>
                <SvgProfileIcon />
              </StyledInputIcon>

              <StyledInput
                hasError={customerNameError}
                name="name"
                onChange={handleNameChange}
                placeholder={customerNameError ? "Vyplňte jméno" : t("name")}
                type="text"
                value={customerName}
              />

              {customerNameError && (
                <StyledErrorIcon>
                  <SvgExclamationIcon />
                </StyledErrorIcon>
              )}
            </StyledInputWrapper>

            <StyledInputWrapper>
              <StyledInputIcon>
                <SvgEmailIcon />
              </StyledInputIcon>

              <StyledInput
                hasError={customerEmailError}
                name="email"
                onChange={handleEmailChange}
                placeholder={customerEmailError ? "Vyplňte e-mail" : t("email")}
                type="email"
                value={customerEmail}
              />

              {customerEmailError && (
                <StyledErrorIcon>
                  <SvgExclamationIcon />
                </StyledErrorIcon>
              )}
            </StyledInputWrapper>

            <StyledInputWrapper>
              <StyledInputIcon isSmall>
                <SvgPhoneIcon />
              </StyledInputIcon>

              <StyledInput
                hasError={customerPhoneError}
                maxLength={9}
                name="phone"
                onChange={handlePhoneChange}
                pattern="[0-9]*"
                placeholder={
                  customerPhoneError ? "Vyplňte telefon" : t("phone")
                }
                type="tel"
                value={customerPhone}
              />

              {customerPhoneError && (
                <StyledErrorIcon>
                  <SvgExclamationIcon />
                </StyledErrorIcon>
              )}
            </StyledInputWrapper>

            <StyledInputWrapper>
              <StyledInputIcon>
                <SvgAddressIcon />
              </StyledInputIcon>

              <StyledDeliveryInput
                hasError={customerAddressError}
                onChange={handleAddressChange}
                ref={addressInputElement}
                placeholder={
                  customerAddressError ? "Vyplňte adresu" : t("fillAddress")
                }
                type="search"
              />

              {deliveryDistance !== null &&
                deliveryDistance > 0 &&
                !customerAddressError && (
                  <StyledLengthInKm>{deliveryDistance} km</StyledLengthInKm>
                )}

              {customerAddressError && (
                <StyledErrorIcon>
                  <SvgExclamationIcon />
                </StyledErrorIcon>
              )}

              {addressIsLoading && (
                <StyledAddressLoader>
                  <SvgLoaderIcon />
                </StyledAddressLoader>
              )}
            </StyledInputWrapper>

            {deliveryPrice === null ? (
              <StyledDeliveryError>
                Adresa mimo rozsah rozvozu
              </StyledDeliveryError>
            ) : (
              <StyledDeliveryPrice>
                Cena dopravy: {deliveryPrice}{" "}
                <StyledDeliveryPriceResult>Kč</StyledDeliveryPriceResult>
              </StyledDeliveryPrice>
            )}

            <StyledMap ref={mapElement} />
          </StyledContent>
        )}
      </StyledLayout>

      <StyledTerms>
        <StyledTitle>Podmínky</StyledTitle>
        <StyledText>
          Min. cena objednávky do 3km. -{" "}
          <StyledTextPrice>250 Kč</StyledTextPrice>
        </StyledText>
        <StyledText>
          Min. cena objednávky od 3km. -{" "}
          <StyledTextPrice>300 Kč</StyledTextPrice>
        </StyledText>
        <StyledText>
          Min. cena objednávky od 6km. -{" "}
          <StyledTextPrice>400 Kč</StyledTextPrice>
        </StyledText>
        <StyledText>
          Čas dopravy od 30 do 120 minut, závisí na frontě objednávek.
        </StyledText>
      </StyledTerms>
    </StyledWrapper>
  );
};

export { Delivery };
