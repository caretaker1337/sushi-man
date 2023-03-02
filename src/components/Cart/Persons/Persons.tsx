import React, { useEffect, useRef } from "react";

import useTranslation from "~/intl/useTranslation";
import {
  TCartProduct,
  setCutleryAmount,
  useStore,
  setCutleryAmountError,
  setCutleryPrice,
} from "~/store";
import { SvgPlusIcon, SvgMinusIcon, SvgExclamationIcon } from "~/icons";
import {
  StyledWrapper,
  StyledQuantityWrapper,
  StyledQuantityButton,
  StyledQuantity,
  StyledName,
  StyledTitle,
  StyledTable,
  StyledTableRow,
  StyledTableCell,
  StyledError,
  StyledPrice,
} from "./styled";

const Persons: React.FC = () => {
  const { t } = useTranslation();
  const { dispatch, store } = useStore();
  const { cart } = store;
  const { cutleryAmount, cutleryAmountError, cutleryPrice, products } = cart;
  const isInitialMount = useRef(true);

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

  const totalCaviarAdded = products.filter(
    ({ isCaviar }: TCartProduct): boolean => isCaviar
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

  const totalCaviarAmount = totalCaviarAdded.reduce(
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
    totalPokeAmount +
    totalCaviarAmount;

  const handleQuantityIncrease = (): void => {
    if (cutleryAmount >= maxCutleryAmount) {
      dispatch(setCutleryPrice(cutleryPrice + 10));
    }

    dispatch(setCutleryAmountError(false));
    dispatch(setCutleryAmount(cutleryAmount + 1));
  };

  const handleQuantityDecrease = (): void => {
    if (cutleryAmount === 0) {
      dispatch(setCutleryAmount(0));
      dispatch(setCutleryPrice(0));
      return;
    }

    if (cutleryAmount > maxCutleryAmount) {
      dispatch(setCutleryPrice(cutleryPrice - 10));
    }

    dispatch(setCutleryAmount(cutleryAmount - 1));
  };

  useEffect((): void => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(setCutleryAmount(0));
      dispatch(setCutleryPrice(0));
    }
  }, [cart.products]);

  return (
    <StyledWrapper id="persons">
      <StyledTitle>{t("cutleryQuantity")}</StyledTitle>

      <StyledTable>
        <tbody>
          <StyledTableRow>
            <StyledTableCell colSpan={3}>
              {t("personsDescription")}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>
              {cutleryAmountError && (
                <StyledError>
                  <SvgExclamationIcon />
                </StyledError>
              )}

              <StyledName hasError={cutleryAmountError}>Příbory</StyledName>
            </StyledTableCell>

            <StyledTableCell hasError={cutleryAmountError}>
              <StyledQuantityWrapper>
                <StyledQuantityButton
                  hasError={cutleryAmountError}
                  isDecrease
                  onClick={handleQuantityDecrease}
                  type="button"
                >
                  <SvgMinusIcon />
                </StyledQuantityButton>
                <StyledQuantity>{cutleryAmount}</StyledQuantity>
                <StyledQuantityButton
                  hasError={cutleryAmountError}
                  isIncrease
                  onClick={handleQuantityIncrease}
                  type="button"
                >
                  <SvgPlusIcon />
                </StyledQuantityButton>
              </StyledQuantityWrapper>
            </StyledTableCell>

            <StyledTableCell>
              <StyledPrice>
                {cutleryAmount > maxCutleryAmount && cutleryAmount !== 0
                  ? `${cutleryPrice} Kč`
                  : ""}
              </StyledPrice>
            </StyledTableCell>
          </StyledTableRow>
        </tbody>
      </StyledTable>
    </StyledWrapper>
  );
};

export { Persons };
