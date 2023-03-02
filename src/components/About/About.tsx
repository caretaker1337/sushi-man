import React from "react";

import { TProps } from "./types";
import useTranslation from "~/intl/useTranslation";
import { StyledWrapper, StyledTitle, StyledText } from "./styled";
import { StyledContainer } from "~/components/Layout/styled";

const About: React.FC<TProps> = ({ about }) => {
  const { locale } = useTranslation();
  const { text, title } = about[`about_${locale}`];

  return (
    <StyledWrapper id="about-section">
      <StyledContainer>
        {title && <StyledTitle>{title}</StyledTitle>}
        {text && <StyledText dangerouslySetInnerHTML={{ __html: text }} />}
      </StyledContainer>
    </StyledWrapper>
  );
};

export { About };
