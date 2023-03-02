import React, { useContext } from "react";

import { LanguageContext } from "~/intl/LanguageProvider";
import { StyledWrapper, StyledList, StyledLink, StyledItem } from "./styled";

const LocaleSwitcher: React.FC = () => {
  const [locale, setLocale] = useContext(LanguageContext);

  const handleClick = (lang: string): void => {
    setLocale(lang);
    document.cookie = `locale=${lang}`;
  };

  return (
    <StyledWrapper>
      <StyledList>
        <StyledItem>
          <StyledLink
            isActive={locale === "cs"}
            onClick={() => handleClick("cs")}
          >
            cz
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink
            isActive={locale === "ru"}
            onClick={() => handleClick("ru")}
          >
            ru
          </StyledLink>
        </StyledItem>
      </StyledList>
    </StyledWrapper>
  );
};

export { LocaleSwitcher };
