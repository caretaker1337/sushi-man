import React from "react";

import { TProps } from "./types";
import useTranslation from "~/intl/useTranslation";
import {
  StyledWrapper,
  StyledLayout,
  StyledImage,
  StyledTitle,
  StyledText,
  StyledButton,
} from "./styled";
import { StyledContainer } from "~/components/Layout/styled";

const Banner: React.FC<TProps> = ({ hero, inner }) => {
  const { locale, t } = useTranslation();
  const content = hero[`hero_${locale}`];
  const welcomeButton = t("welcomeButton");

  const handleClick = (): void => {
    const productsSection = document.getElementById("products-section");

    productsSection &&
      productsSection.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <StyledWrapper inner={inner}>
      <StyledImage inner={inner} src={content.image.url} alt="Media" />

      <StyledLayout inner={inner}>
        <StyledContainer>
          <StyledTitle dangerouslySetInnerHTML={{ __html: content.title }} />
          <StyledText dangerouslySetInnerHTML={{ __html: content.text }} />
          <StyledButton onClick={handleClick} inner={inner} type="button">
            {welcomeButton}
          </StyledButton>
        </StyledContainer>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Banner };
