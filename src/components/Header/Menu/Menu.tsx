import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledList, StyledItem, StyledLink } from "./styled";

export interface TMenuItem {
  anchor: string;
  text: string;
}

interface TProps {
  closeMenu: () => void;
  menuItems: TMenuItem[];
  inner?: boolean;
}

const Menu: React.FC<TProps> = ({ closeMenu, menuItems, inner }) => {
  const handleScroll = (anchor: string): void => {
    const scrolledSection = document.getElementById(anchor);

    scrolledSection &&
      scrolledSection.scrollIntoView({
        behavior: "smooth",
      });

    closeMenu();
  };

  return (
    <StyledWrapper>
      {inner ? (
        <>
          {menuItems && (
            <StyledList>
              {!!menuItems.length &&
                menuItems.map(
                  (
                    { anchor, text }: TMenuItem,
                    index: number
                  ): React.ReactElement => (
                    <StyledItem key={`${index}-${anchor}`}>
                      <Link href={anchor} passHref>
                        <StyledLink>{text}</StyledLink>
                      </Link>
                    </StyledItem>
                  )
                )}
            </StyledList>
          )}
        </>
      ) : (
        <>
          {menuItems && (
            <StyledList>
              {!!menuItems.length &&
                menuItems.map(
                  (
                    { anchor, text }: TMenuItem,
                    index: number
                  ): React.ReactElement => (
                    <StyledItem key={`${index}-${anchor}`}>
                      <StyledLink onClick={() => handleScroll(anchor)}>
                        {text}
                      </StyledLink>
                    </StyledItem>
                  )
                )}
            </StyledList>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

export { Menu };
