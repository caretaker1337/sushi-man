import React from "react";

import { useStore, TPayment, setPaymentType } from "~/store";
import useTranslation from "~/intl/useTranslation";
import {
  StyledWrapper,
  StyledRow,
  StyledContent,
  StyledImageHolder,
  StyledImage,
  StyledTitle,
  StyledRadioWrapper,
  StyledRadio,
  StyledRadioLabel,
  StyledRadioLabelText,
} from "./styled";

const Payment: React.FC = () => {
  const { t } = useTranslation();
  const { dispatch, store } = useStore();
  const { cart } = store;
  const { paymentType, isPickupChecked } = cart;

  const handlePaymentChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    dispatch(setPaymentType(currentTarget.value as TPayment));
  };

  return (
    <StyledWrapper>
      <StyledTitle>{t("paymentMethods")}</StyledTitle>

      <StyledContent>
        <StyledRow>
          <StyledRadioWrapper>
            <StyledRadio
              checked={paymentType === TPayment.CARD}
              id="input-card"
              name="input-payment"
              onChange={handlePaymentChange}
              type="radio"
              value={TPayment.CARD}
            />
            <StyledRadioLabel htmlFor="input-card">
              <StyledRadioLabelText>{t("payByCard")}</StyledRadioLabelText>
              <StyledImageHolder>
                <StyledImage alt="Apple pay" src="/images/payments_img2.png" />
                <StyledImage alt="Card" src="/images/payments_img.png" />
              </StyledImageHolder>
            </StyledRadioLabel>
          </StyledRadioWrapper>
        </StyledRow>

        <StyledRow isHidden={!isPickupChecked}>
          <StyledRadioWrapper>
            <StyledRadio
              checked={paymentType === TPayment.CARDPICKUP}
              id="input-card-pickup"
              name="input-payment"
              onChange={handlePaymentChange}
              type="radio"
              value={TPayment.CARDPICKUP}
            />
            <StyledRadioLabel htmlFor="input-card-pickup">
              <StyledRadioLabelText>
                {t("payByCardPickup")}
              </StyledRadioLabelText>
              <StyledImageHolder>
                <StyledImage alt="Apple pay" src="/images/payments_img2.png" />
                <StyledImage alt="Card" src="/images/payments_img.png" />
              </StyledImageHolder>
            </StyledRadioLabel>
          </StyledRadioWrapper>
        </StyledRow>

        {/* <StyledRow>
          <StyledRadioWrapper>
            <StyledRadio
              checked={paymentType === "cardCourier"}
              id="input-card"
              name="input-payment"
              onChange={handlePaymentChange}
              type="radio"
              value="cardCourier"
            />
            <StyledRadioLabel htmlFor="input-card">
              <StyledRadioLabelText>{t("payByCardCourier")}</StyledRadioLabelText>
              <StyledImage alt="Card" src="/images/payments_img.png" />
            </StyledRadioLabel>
          </StyledRadioWrapper>
        </StyledRow> */}

        <StyledRow>
          <StyledRadioWrapper>
            <StyledRadio
              checked={paymentType === TPayment.CASH}
              id="input-cash"
              name="input-payment"
              onChange={handlePaymentChange}
              type="radio"
              value={TPayment.CASH}
            />
            <StyledRadioLabel htmlFor="input-cash">
              <StyledRadioLabelText>{t("payByCash")}</StyledRadioLabelText>
              <StyledImage alt="Card" src="/images/cash_img.jpg" />
            </StyledRadioLabel>
          </StyledRadioWrapper>
        </StyledRow>
      </StyledContent>
    </StyledWrapper>
  );
};

export { Payment };
