import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNotifications } from "reapop";

import { useStore, TCartProduct, addToCart } from "~/store";
import { TProps } from "./types";
import { SvgBuyIcon, SvgLoaderIcon } from "~/icons";
import {
  StyledWrapper,
  StyledContent,
  StyledDesc,
  StyledFooter,
  StyledImageHolder,
  StyledLayout,
  StyledLink,
  StyledPrice,
  StyledText,
  StyledTitle,
  StyledAddButton,
  StyledLoader,
  StyledImage,
} from "./styled";

const Item: React.FC<TProps> = ({
  allergeny,
  id,
  image,
  ingredients,
  isCaviar,
  isDrink,
  isPoke,
  isRoll,
  isStarter,
  isSet,
  price,
  slug,
  title,
  triggerShopModal,
  triggerOrdersStopModal,
  weight,
}) => {
  const router = useRouter();
  const [imageIsLoading, toggleImageLoading] = useState<boolean>(true);
  const { notify } = useNotifications();
  const { dispatch, store } = useStore();
  const { shopSettings } = store;

  const handleAddToCart = (product: TCartProduct): void => {
    if (shopSettings.shopIsClosed) {
      triggerShopModal(true);
      return;
    }

    if (shopSettings.ordersStop) {
      triggerOrdersStopModal(true);
      return;
    }

    if (product.isPoke) {
      router.push(`/product/[${product.slug}]`, `/product/${product.slug}`, {
        scroll: true,
      });
      return;
    }

    dispatch(addToCart(product));
    notify({
      dismissAfter: 3000,
      dismissible: true,
      position: "bottom-center",
      showDismissButton: true,
      status: "success",
      title: `${product.title} přidán do košíku`,
    });
  };

  const handleImageLoading = (): void => {
    toggleImageLoading(false);
  };

  return (
    <StyledWrapper>
      <StyledImageHolder>
        <Link as={`/product/${slug}`} href={`/product/[${slug}]`} passHref>
          <StyledLink>
            {imageIsLoading && (
              <StyledLoader>
                <SvgLoaderIcon />
              </StyledLoader>
            )}

            <StyledImage
              alt={title}
              layout="fill"
              objectFit="cover"
              onLoadingComplete={handleImageLoading}
              src={image.url}
            />
          </StyledLink>
        </Link>
      </StyledImageHolder>

      <StyledLayout>
        <StyledTitle>
          <Link as={`/product/${slug}`} href={`/product/[${slug}]`} passHref>
            <StyledLink>
              <StyledText>{title}</StyledText>
            </StyledLink>
          </Link>
        </StyledTitle>

        <StyledContent>
          <Link as={`/product/${slug}`} href={`/product/[${slug}]`} passHref>
            <StyledLink>
              <StyledDesc>
                <StyledText>{weight}</StyledText>
              </StyledDesc>

              {ingredients && (
                <StyledDesc>
                  <StyledText>{ingredients}</StyledText>
                </StyledDesc>
              )}

              {allergeny && (
                <StyledDesc>
                  <StyledText>{allergeny}</StyledText>
                </StyledDesc>
              )}
            </StyledLink>
          </Link>
        </StyledContent>

        <StyledFooter>
          <StyledPrice>
            <StyledText>{price} Kč</StyledText>
          </StyledPrice>

          <StyledAddButton
            onClick={() =>
              handleAddToCart({
                allergeny,
                id,
                image: {
                  url: image.url,
                },
                ingredients,
                isCaviar,
                isDrink,
                isPoke,
                isRoll,
                isStarter,
                isSet,
                price,
                product_modifiers: [],
                product_submodifiers: [],
                quantity: 1,
                slug,
                title,
                totalPrice: parseInt(price),
                weight,
              })
            }
          >
            <SvgBuyIcon />
          </StyledAddButton>
        </StyledFooter>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Item };
