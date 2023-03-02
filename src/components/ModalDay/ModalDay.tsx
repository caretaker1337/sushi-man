import React from "react";

import { SvgCloseIcon } from "~/icons";
import {
  StyledWrapper,
  StyledLayout,
  StyledTitle,
  StyledLinks,
  StyledList,
  StyledItem,
  StyledLink,
  StyledClose,
  StyledBackground,
  StyledTime,
} from "./styled";
import { TProps, TContactsLink } from "./types";
import { StyledContainer } from "~/components/Layout/styled";

const ModalDay: React.FC<TProps> = ({
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

export { ModalDay };
