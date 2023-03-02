import React from "react";

import { TProps, TDeliveryItem } from "./types";
import useTranslation from "~/intl/useTranslation";
import {
  StyledWrapper,
  StyledLayout,
  StyledTitle,
  StyledList,
  StyledItem,
  StyledItemTitle,
  StyledItemText,
  StyledSubtitle
} from "./styled";
import { StyledContainer } from "~/components/Layout/styled";

const Delivery: React.FC<TProps> = ({ deliveryItems, deliveryTitle }) => {
  const { locale } = useTranslation();
  const items = deliveryItems.filter(
    (item: TDeliveryItem) => item.locale === locale
  );
  const { text: deliveryTitleText, title } = deliveryTitle[`deliveryTitle_${locale}`];

  return (
    <StyledWrapper id="delivery-section">
      <StyledContainer>
        <StyledLayout>
          <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />
          <StyledSubtitle dangerouslySetInnerHTML={{ __html: deliveryTitleText }} />

          {items && (
            <StyledList>
              {!!items.length &&
                items.map(
                  (
                    { title, text }: TDeliveryItem,
                    index: number
                  ): React.ReactElement => (
                    <StyledItem data-count={`0${index + 1}`} key={index}>
                      <StyledItemTitle>{title}</StyledItemTitle>
                      <StyledItemText
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                    </StyledItem>
                  )
                )}
            </StyledList>
          )}
        </StyledLayout>
      </StyledContainer>
    </StyledWrapper>
  );
};

export { Delivery };
