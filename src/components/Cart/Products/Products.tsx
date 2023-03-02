import React, { useCallback, useEffect } from "react";
import Link from "next/link";

import useTranslation from "~/intl/useTranslation";
import {
  TCartProduct,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  useStore,
  setTotalRollsDiscount,
} from "~/store";
import { SvgPlusIcon, SvgMinusIcon } from "~/icons";
import {
  StyledWrapper,
  StyledContent,
  StyledRow,
  StyledTitle,
  StyledImage,
  StyledLink,
  StyledBold,
  StyledQuantityWrapper,
  StyledQuantity,
  StyledQuantityButton,
  StyledPrice,
  StyledRemove,
  StyledWeight,
  StyledImageArea,
  StyledNameArea,
  StyledOptionsArea,
  StyledQuantityArea,
  StyledModifiersList,
  StyledModifiersItem,
  StyledText,
  StyledTextLabel,
} from "./styled";
import { TProductModifier } from "~/components";

const Products: React.FC = () => {
  const { t } = useTranslation();
  const { dispatch, store } = useStore();
  const { cart } = store;
  const { products } = cart;

  const checkRollsAdded = useCallback((): number => {
    const totalRollsAdded = products.filter(
      ({ isRoll }: TCartProduct): boolean => isRoll
    );

    const totalAmount = totalRollsAdded.reduce(
      (accumulator: number, { quantity }: TCartProduct) => {
        return accumulator + quantity;
      },
      0
    );

    return totalAmount;
  }, [products]);

  const renderDiscount = (): React.ReactElement => (
    <>
      {checkRollsAdded() > 0 && checkRollsAdded() % 4 === 0 ? (
        <StyledText>
          {t("discountReceived")}{" "}
          <StyledTextLabel>
            -
            {checkRollsAdded() % 4 === 0
              ? Math.floor(checkRollsAdded() / 4) * 50
              : 50}
            Kč
          </StyledTextLabel>
        </StyledText>
      ) : (
        <StyledText>
          {t("addMoreRolls")}{" "}
          {checkRollsAdded() > 0 ? 4 - (checkRollsAdded() % 4) : 4}{" "}
          {t("addMoreRollsResult")}
          <StyledTextLabel>
            {" "}
            {"-"}
            {checkRollsAdded() > 0 && checkRollsAdded() < 4
              ? 50
              : checkRollsAdded() > 0 && checkRollsAdded() % 4 === 0
              ? Math.floor(checkRollsAdded() / 4) * 50
              : checkRollsAdded() > 0 && checkRollsAdded() > 4
              ? Math.ceil(checkRollsAdded() / 4) * 50
              : 50}
            Kč
          </StyledTextLabel>
        </StyledText>
      )}
    </>
  );

  const handleQuantityIncrease = (id: string, quantity: number): void => {
    dispatch(increaseQuantity(id, quantity + 1));
  };

  const handleQuantityDecrease = (id: string, quantity: number): void => {
    if (quantity === 1) return;
    dispatch(decreaseQuantity(id, quantity - 1));
  };

  const handleProductRemove = (id: string, quantity: number): void => {
    dispatch(removeFromCart(id, quantity));
  };

  useEffect((): void => {
    dispatch(setTotalRollsDiscount(Math.floor(checkRollsAdded() / 4) * 50));
  }, [checkRollsAdded]);

  return (
    <StyledWrapper id="products">
      <StyledTitle>{t("order")}</StyledTitle>

      <StyledContent>
        {cart.products.map(
          (
            {
              id,
              title,
              image,
              weight,
              price,
              product_modifiers,
              quantity,
              slug,
              totalPrice,
            }: TCartProduct,
            index: number
          ): React.ReactElement => (
            <StyledRow key={`${index}-${title}`}>
              <StyledImageArea>
                <Link
                  as={`/product/${slug}`}
                  href={`/product/[${slug}]`}
                  passHref
                >
                  <StyledLink>
                    <StyledImage alt={title} src={image.url} />
                  </StyledLink>
                </Link>
              </StyledImageArea>

              <StyledNameArea>
                <StyledBold>{title}</StyledBold>
                <StyledWeight>{weight}</StyledWeight>
                {product_modifiers && !!product_modifiers.length && (
                  <StyledModifiersList>
                    {product_modifiers.map(
                      ({ name }: TProductModifier): React.ReactElement => (
                        <StyledModifiersItem key={`${index}-${name}`}>
                          {name}
                        </StyledModifiersItem>
                      )
                    )}
                  </StyledModifiersList>
                )}
              </StyledNameArea>

              <StyledQuantityArea>
                <StyledQuantityWrapper>
                  <StyledQuantityButton
                    isDecrease
                    onClick={() => handleQuantityDecrease(id, quantity)}
                    type="button"
                  >
                    <SvgMinusIcon />
                  </StyledQuantityButton>
                  <StyledQuantity>{quantity ? quantity : 1}</StyledQuantity>
                  <StyledQuantityButton
                    isIncrease
                    onClick={() => handleQuantityIncrease(id, quantity)}
                    type="button"
                  >
                    <SvgPlusIcon />
                  </StyledQuantityButton>
                </StyledQuantityWrapper>
              </StyledQuantityArea>

              <StyledOptionsArea>
                <StyledPrice>
                  {totalPrice ? `${totalPrice} Kč` : price}
                </StyledPrice>

                <StyledRemove
                  onClick={() => handleProductRemove(id, quantity)}
                  type="button"
                >
                  {t("remove")}
                </StyledRemove>
              </StyledOptionsArea>
            </StyledRow>
          )
        )}
      </StyledContent>

      {renderDiscount()}
    </StyledWrapper>
  );
};

export { Products };
