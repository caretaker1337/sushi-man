import React from "react";

import { SvgCloseIcon } from "~/icons";
import {
  StyledBackground,
  StyledClose,
  StyledItem,
  StyledLayout,
  StyledLink,
  StyledLinks,
  StyledList,
  StyledTime,
  StyledTitle,
  StyledWrapper,
} from "./styled";
import { StyledContainer } from "~/components/Layout/styled";

export interface TContactsLink {
  type: string;
  url: string;
}

interface TProps {
  isOpened: boolean;
  close: () => void;
  title: string;
  text: string;
  contactsLinks: TContactsLink[];
}

const Modal: React.FC<TProps> = ({
  close,
  isOpened,
  title,
  text,
  contactsLinks,
}) => {
  const handleClose = (): void => {
    close();
  };

  return (
    <StyledWrapper>
      <StyledBackground onClick={handleClose} isOpened={isOpened} />
      <StyledLayout isOpened={isOpened}>
        <StyledContainer>
          {title && <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />}
          {text && <StyledTime dangerouslySetInnerHTML={{ __html: text }} />}

          {contactsLinks && (
            <StyledLinks>
              <StyledList>
                {!!contactsLinks.length &&
                  contactsLinks.map(
                    (
                      { url, type }: TContactsLink,
                      index: number
                    ): React.ReactElement => (
                      <StyledItem key={index} type={type}>
                        <StyledLink href={url} target="_blank" />
                      </StyledItem>
                    )
                  )}
              </StyledList>
            </StyledLinks>
          )}
        </StyledContainer>

        <StyledClose onClick={handleClose} type="button">
          <SvgCloseIcon />
        </StyledClose>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Modal };
