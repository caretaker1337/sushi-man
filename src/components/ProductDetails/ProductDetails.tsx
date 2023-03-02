import React, { useState } from "react";
import { useNotifications } from "reapop";

import { TProps, TProductModifier, TProductSubmodifier } from "./types";
import useTranslation from "~/intl/useTranslation";
import { Modal } from "~/components";
import { addToCart, TCartProduct, useStore } from "~/store";
import { SvgLoaderIcon } from "~/icons";
import {
  StyledWrapper,
  StyledLayout,
  StyledContentLeft,
  StyledContentRight,
  StyledTitle,
  StyledContent,
  StyledImageHolder,
  StyledImage,
  StyledButton,
  StyledItem,
  StyledItemTitle,
  StyledItemSecondary,
  StyledItemPrice,
  StyledModifiers,
  StyledMofifiersCheckbox,
  StyledModifierLabel,
  StyledModifierPrice,
  StyledModifiersList,
  StyledModifiersItem,
  StyledSubmodifiersList,
  StyledSubmodifiersItem,
  StyledImageLoader,
} from "./styled";

interface TSelectedModifier extends TProductModifier {
  modifierIndex: number;
}

interface TSelectedSubmodifier extends TProductSubmodifier {
  modifierIndex: number;
}

const ProductDetails: React.FC<TProps> = ({
  allergeny,
  id,
  image,
  ingredients,
  isCaviar,
  isRoll,
  isDrink,
  isStarter,
  isPoke,
  isSet,
  price,
  product_modifiers,
  slug,
  title,
  weight,
}) => {
  const { dispatch, store } = useStore();
  const { notify } = useNotifications();
  const { t } = useTranslation();
  const ordersStopModalTitle = t("ordersStopModalTitle");
  const ordersStopModalText = t("ordersStopModalText");
  const shopModalTitle = t("shopModalTitle");
  const shopModalText = t("modalText");
  const contactsLinks = t("contactsLinks");
  const [ordersStopModalIsOpened, toggleOrdersStopModalOpened] =
    useState<boolean>(false);
  const [shopModalIsOpened, toggleShopModalOpened] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(parseInt(price));
  const [selectedModifiers, setSelectedModifiers] = useState<
    TSelectedModifier[]
  >([]);
  const [selectedSubModifiers, setSelectedSubmodifiers] = useState<
    TSelectedSubmodifier[]
  >([]);
  const [imageIsLoading, toggleImageLoading] = useState<boolean>(true);
  const { shopSettings } = store;

  const handleAddToCart = (product: TCartProduct): void => {
    if (shopSettings.shopIsClosed) {
      toggleShopModalOpened(true);
      return;
    }

    if (shopSettings.ordersStop) {
      toggleOrdersStopModalOpened(true);
      return;
    }

    if (
      (isPoke && selectedModifiers.length === 0) ||
      (!isPoke &&
        selectedModifiers.length > 0 &&
        selectedModifiers.length > selectedSubModifiers.length)
    ) {
      notify({
        dismissAfter: 3000,
        dismissible: true,
        position: "bottom-center",
        showDismissButton: true,
        status: "error",
        title: `Zvolte příchuť`,
      });
      return;
    }

    dispatch(addToCart(product));
    setSelectedModifiers([]);
    setSelectedSubmodifiers([]);
    setTotalPrice(parseInt(price));
    notify({
      dismissAfter: 3000,
      dismissible: true,
      position: "bottom-center",
      showDismissButton: true,
      status: "success",
      title: `${product.title} přidáno do košíku`,
    });
  };

  const handleModifierChange = (
    modifier: TProductModifier,
    modifierIndex: number
  ): void => {
    if (isPoke) {
      const newModifiers = [...selectedModifiers];

      newModifiers.length = 0;
      newModifiers.push({ ...modifier, modifierIndex });
      setSelectedModifiers(newModifiers);
      setTotalPrice((prevTotalPrice: number): number => {
        return prevTotalPrice + parseInt(modifier.price);
      });
      return;
    }

    if (
      selectedModifiers.some(
        (selectedModifier: TProductModifier): boolean =>
          selectedModifier.id === modifier.id
      )
    ) {
      const newModifiers = selectedModifiers.filter(
        (selectedModifier: TProductModifier): boolean =>
          selectedModifier.id !== modifier.id
      );

      setSelectedModifiers(newModifiers);
      setTotalPrice(
        (prevTotalPrice: number): number =>
          prevTotalPrice - parseInt(modifier.price)
      );
    } else {
      const newModifiers = [...selectedModifiers];

      newModifiers.push({ ...modifier, modifierIndex });
      setSelectedModifiers(newModifiers);
      setTotalPrice((prevTotalPrice: number): number => {
        return prevTotalPrice + parseInt(modifier.price);
      });
    }
  };

  const handleSubModifierChange = (
    subModifier: TProductSubmodifier,
    modifierIndex: number
  ): void => {
    const newSubModifiers = selectedSubModifiers.filter(
      (selectedSubModifier: TSelectedSubmodifier): boolean =>
        selectedSubModifier.modifierIndex !== modifierIndex
    );

    newSubModifiers.push({ ...subModifier, modifierIndex });
    setSelectedSubmodifiers(newSubModifiers);
  };

  const handleShopModalClose = (): void => {
    toggleShopModalOpened(false);
  };

  const handleOrdersStopModalClose = (): void => {
    toggleOrdersStopModalOpened(false);
  };

  const handleImageLoading = (): void => {
    toggleImageLoading(false);
  };

  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledContentLeft>
          {imageIsLoading && (
            <StyledImageLoader>
              <SvgLoaderIcon />
            </StyledImageLoader>
          )}

          <StyledImageHolder>
            <StyledImage
              alt={title}
              height={540}
              layout="responsive"
              objectFit="cover"
              onLoadingComplete={handleImageLoading}
              src={image.url}
              width={400}
            />
          </StyledImageHolder>
        </StyledContentLeft>

        <StyledContentRight>
          <StyledTitle>{title}</StyledTitle>

          <StyledContent>
            <StyledItem>
              <StyledItemTitle>{t("ingredients")}: </StyledItemTitle>
              {ingredients}
            </StyledItem>
            <StyledItemSecondary>{allergeny}</StyledItemSecondary>
            <StyledItem>
              <StyledItemTitle>{t("quantity")}: </StyledItemTitle>
              {weight}
            </StyledItem>
            <StyledItemPrice>
              <StyledItemTitle>{t("price")}: </StyledItemTitle>
              {price} Kč
            </StyledItemPrice>

            {product_modifiers && !!product_modifiers.length && (
              <>
                <StyledItem>
                  <StyledItemTitle>{t("modifiers")}:</StyledItemTitle>
                </StyledItem>

                <StyledModifiers>
                  <StyledModifiersList>
                    {product_modifiers.map(
                      (
                        modifier: TProductModifier,
                        index: number
                      ): React.ReactElement => (
                        <StyledModifiersItem key={`${index}-${modifier.name}`}>
                          <StyledMofifiersCheckbox
                            id={modifier.id}
                            name="modifier"
                            onChange={() =>
                              handleModifierChange(modifier, index)
                            }
                            checked={selectedModifiers.some(
                              (selectedModifier: TProductModifier) =>
                                selectedModifier.id === modifier.id
                            )}
                            type={isPoke ? "radio" : "checkbox"}
                          />
                          <StyledModifierLabel htmlFor={modifier.id}>
                            {modifier.name}
                            {!isPoke && (
                              <>
                                {" "}
                                +{" "}
                                <StyledModifierPrice>
                                  {modifier.price} Kč
                                </StyledModifierPrice>
                              </>
                            )}
                          </StyledModifierLabel>

                          {selectedModifiers.some(
                            (selectedModifier: TProductModifier): boolean =>
                              selectedModifier.id === modifier.id
                          ) &&
                            modifier.submodifiers &&
                            !!modifier.submodifiers.length && (
                              <StyledSubmodifiersList>
                                {modifier.submodifiers.map(
                                  (
                                    subModifier: TProductSubmodifier
                                  ): React.ReactElement => (
                                    <StyledSubmodifiersItem
                                      key={`${index}-${subModifier.id}`}
                                    >
                                      <StyledMofifiersCheckbox
                                        id={`${index}-${subModifier.id}`}
                                        isSecondary
                                        name={`${index}-subModifier}`}
                                        onChange={() =>
                                          handleSubModifierChange(
                                            subModifier,
                                            index
                                          )
                                        }
                                        type="radio"
                                      />
                                      <StyledModifierLabel
                                        htmlFor={`${index}-${subModifier.id}`}
                                      >
                                        {subModifier.name}
                                      </StyledModifierLabel>
                                    </StyledSubmodifiersItem>
                                  )
                                )}
                              </StyledSubmodifiersList>
                            )}
                        </StyledModifiersItem>
                      )
                    )}
                  </StyledModifiersList>
                </StyledModifiers>
              </>
            )}

            {product_modifiers && !!product_modifiers.length && (
              <StyledItemPrice>
                <StyledItemTitle>{t("priceTotal")}:</StyledItemTitle>
                {totalPrice} Kč
              </StyledItemPrice>
            )}
          </StyledContent>

          <StyledButton
            onClick={() =>
              handleAddToCart({
                allergeny,
                id: !!selectedModifiers.length
                  ? `${id}-${Math.random().toString(16).slice(2)}`
                  : id,
                image: {
                  url: image.url,
                },
                ingredients,
                isRoll,
                isDrink,
                isStarter,
                isPoke,
                isSet,
                isCaviar,
                price,
                product_modifiers: selectedModifiers,
                product_submodifiers: selectedSubModifiers,
                quantity: 1,
                slug,
                title,
                totalPrice,
                weight,
              })
            }
            type="button"
          >
            {t("addToCart")}
          </StyledButton>
        </StyledContentRight>
      </StyledLayout>

      <Modal
        contactsLinks={contactsLinks}
        isOpened={shopModalIsOpened}
        close={handleShopModalClose}
        text={shopModalText}
        title={shopModalTitle}
      />

      <Modal
        contactsLinks={contactsLinks}
        isOpened={ordersStopModalIsOpened}
        close={handleOrdersStopModalClose}
        text={ordersStopModalText}
        title={ordersStopModalTitle}
      />
    </StyledWrapper>
  );
};

export { ProductDetails };
