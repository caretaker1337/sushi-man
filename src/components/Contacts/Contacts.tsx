import React from "react";


import { TSchedule, setSchedule, useStore } from "~/store";
import useTranslation from "~/intl/useTranslation";
import {
  StyledWrapper,
  StyledLayout,
  StyledTitle,
  StyledLinks,
  StyledList,
  StyledItem,
  StyledLink,
  StyledTime,
} from "./styled";
import { StyledContainer } from "~/components/Layout/styled";
import { useEffect } from "react";

interface TContactsLink {
  url: string;
  type: string;
}

interface TProps {
  schedule: {
    schedule_cs: TSchedule;
    schedule_ru: TSchedule;
  };
}

const Contacts: React.FC<TProps> = ({ schedule }) => {
  const { locale, t } = useTranslation();
  const { dispatch } = useStore();
  const content = schedule[`schedule_${locale}`];
  const contactsLinks = t("contactsLinks");

  useEffect((): void => {
    dispatch(
      setSchedule({
        schedule_cs: schedule["schedule_cs"],
        schedule_ru: schedule["schedule_ru"],
      })
    );
  }, []);

  return (
    <StyledWrapper id="contacts-section">
      <StyledContainer>
        <StyledLayout>
          <StyledTitle>{content.title}</StyledTitle>
          <StyledTime dangerouslySetInnerHTML={{ __html: content.schedule }} />
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
        </StyledLayout>
      </StyledContainer>
    </StyledWrapper>
  );
};

export { Contacts };
