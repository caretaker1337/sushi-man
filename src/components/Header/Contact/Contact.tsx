import React from "react";

import useTranslation from "~/intl/useTranslation";
import { StyledWrapper, StyledLink } from "./styled";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const phoneNumber = t("phoneNumber");

  return (
    <StyledWrapper>
      <StyledLink href="tel:+420792745116">{phoneNumber}</StyledLink>
    </StyledWrapper>
  );
};

export { Contact };
