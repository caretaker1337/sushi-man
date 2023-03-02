import React, { useEffect, useState } from "react";

import { gql, useLazyQuery } from "@apollo/client";
import { Item } from "./Item";
import client from "~/apollo-client";
import { TProps, TCategory, TCategoryTypes } from "./types";
import { SvgLoaderIcon } from "~/icons";
import { TProduct, Modal } from "~/components";
import { useStore } from "~/store";
import useTranslation from "~/intl/useTranslation";
import {
  StyledWrapper,
  StyledTitle,
  StyledList,
  StyledPanel,
  StyledTabsList,
  StyledTabs,
  StyledTab,
  StyledLoader,
} from "./styled";
import { StyledContainer } from "~/components/Layout/styled";

const productsCategories: TCategory[] = [
  {
    type: "isRoll",
    name: "Rolly",
  },
  {
    name: "Poke",
    type: "isPoke",
  },
  {
    name: "Sety",
    type: "isSet",
  },
  {
    name: "Předkrmy",
    type: "isStarter",
  },
  {
    name: "Drinky",
    type: "isDrink",
  },
  {
    name: "Kaviár",
    type: "isCaviar",
  },
];

const Products: React.FC<TProps> = ({ title, inner }) => {
  const { t } = useTranslation();
  const [ordersStopModalIsOpened, toggleOrdersStopModalOpened] =
    useState<boolean>(false);
  const { store } = useStore();
  const { modalOrder } = store;
  const [shopModalIsOpened, toggleShopModalOpened] = useState<boolean>(false);
  const [categoryType, setCategoryType] = useState<TCategoryTypes>(null);
  const shopModalTitle = t("shopModalTitle");
  const shopModalText = t("modalText");
  const contactsLinks = t("contactsLinks");
  const [getProducts, { data, loading: productsLoading }] = useLazyQuery(
    gql`
      query ProductsQuery($where: JSON) {
        products(sort: "priority", where: $where) {
          allergeny
          id
          image {
            url
          }
          ingredients
          isRoll
          isStarter
          isDrink
          isSet
          isPoke
          isCaviar
          price
          slug
          title
          weight
        }
      }
    `,
    {
      client,
      variables: {
        where: {
          ...(categoryType === "isRoll" && { isRoll: true }),
          ...(categoryType === "isPoke" && { isPoke: true }),
          ...(categoryType === "isStarter" && { isStarter: true }),
          ...(categoryType === "isDrink" && { isDrink: true }),
          ...(categoryType === "isSet" && { isSet: true }),
          ...(categoryType === "isCaviar" && { isCaviar: true }),
        },
      },
    }
  );

  const handleCategoryChange = (categoryType: TCategoryTypes): void => {
    setCategoryType(categoryType);
  };

  const handleShopModalToggle = (modalIsOpened: boolean): void => {
    toggleShopModalOpened(modalIsOpened);
  };

  const handleShopModalClose = (): void => {
    toggleShopModalOpened(false);
  };

  const handleOrdersStopModalToggle = (modalIsOpened: boolean): void => {
    toggleOrdersStopModalOpened(modalIsOpened);
  };

  const handleOrdersStopModalClose = (): void => {
    toggleOrdersStopModalOpened(false);
  };

  const renderTabPanel = (): React.ReactElement => (
    <StyledPanel>
      {data?.products && !!data?.products.length && (
        <StyledList>
          {data?.products.map(
            (productsItem: TProduct, index: number): React.ReactElement => (
              <Item
                key={`${productsItem.slug}-${index}`}
                triggerOrdersStopModal={handleOrdersStopModalToggle}
                triggerShopModal={handleShopModalToggle}
                {...productsItem}
              />
            )
          )}
        </StyledList>
      )}
    </StyledPanel>
  );

  useEffect((): void => {
    if (categoryType !== null) {
      getProducts();
    }
  }, [categoryType]);

  return (
    <StyledWrapper id="products-section">
      <StyledContainer>
        <StyledTitle inner={inner}>{title}</StyledTitle>

        {productsCategories && !!productsCategories.length && (
          <StyledTabs>
            <StyledTabsList>
              {productsCategories.map(
                (
                  { name, type }: TCategory,
                  index: number
                ): React.ReactElement => (
                  <StyledTab
                    isActive={
                      (categoryType === "isRoll" && index === 0) ||
                      (categoryType === "isPoke" && index === 1) ||
                      (categoryType === "isSet" && index === 2) ||
                      (categoryType === "isStarter" && index === 3) ||
                      (categoryType === "isDrink" && index === 4)
                    }
                    isCollapsed={categoryType !== null}
                    isDrink={type === "isDrink"}
                    isPoke={type === "isPoke"}
                    isRoll={type === "isRoll"}
                    isStarter={type === "isStarter"}
                    isCaviar={type === "isCaviar"}
                    isSet={type === "isSet"}
                    key={`${index}-${name}`}
                    onClick={() => handleCategoryChange(type)}
                  >
                    {name}
                  </StyledTab>
                )
              )}
            </StyledTabsList>

            {renderTabPanel()}
          </StyledTabs>
        )}

        {productsLoading && (
          <StyledLoader iscollapsed={categoryType !== null}>
            <SvgLoaderIcon />
          </StyledLoader>
        )}

        <Modal
          close={handleOrdersStopModalClose}
          contactsLinks={contactsLinks}
          isOpened={ordersStopModalIsOpened}
          text={modalOrder.text}
          title={modalOrder.title}
        />

        <Modal
          close={handleShopModalClose}
          contactsLinks={contactsLinks}
          isOpened={shopModalIsOpened}
          text={shopModalText}
          title={shopModalTitle}
        />
      </StyledContainer>
    </StyledWrapper>
  );
};

export { Products };
