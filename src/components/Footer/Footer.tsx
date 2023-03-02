import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useStore } from "~/store";
import { Cart } from "./Cart";
import { Modal } from "~/components";
import { TContactsLink } from "~/components/Modal";
import useTranslation from "~/intl/useTranslation";
import { SvgArrowTopIcon, SvgChatIcon } from "~/icons";
import {
  StyledFooter,
  StyledLayout,
  StyledLogo,
  StyledLogoLink,
  StyledMenu,
  StyledMenuList,
  StyledMenuItem,
  StyledMenuLink,
  StyledItem,
  StyledLink,
  StyledCopy,
  StyledCopyText,
  StyledCopyLink,
  StyledText,
  StyledEmail,
  StyledScrollButton,
  StyledChatButton,
  StyledContacts,
  StyledContactsList,
  StyledContactsItem,
  StyledContactsLink,
} from "./styled";
import { StyledContainer } from "~/components/Layout/styled";
import { ModalDay } from "../ModalDay";

interface TMenuItem {
  anchor: string;
  text: string;
}

interface TProps {
  inner?: boolean;
  menuItems: TMenuItem[];
}

const Footer: React.FC<TProps> = ({ menuItems, inner }) => {
  const { t } = useTranslation();
  const { store } = useStore();
  const { modalDay, modalOrder, shopSettings } = store;
  const [pageOffset, setPageOffset] = useState(0);
  const [shopModalIsOpened, toggleShopModalOpened] = useState<boolean>(true);
  const [ordersStopModalIsOpened, toggleOrdersStopModalOpened] =
    useState<boolean>(true);
  const [modalIsOpened, toggleModalOpened] = useState<boolean>(false);
  const allergeny = t("allergeny");
  const allergenyImage = t("allergenyImage");
  const contactsLinks = t("contactsLinks");
  const modalTitle = t("modalTitle");
  const modalText = t("modalText");

  const handleScroll = (anchor: string): void => {
    const scrolledSection = document.getElementById(anchor);

    scrolledSection &&
      scrolledSection.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleScrollTop = (): void => {
    const scrolledSection = document.getElementById("header");

    scrolledSection &&
      scrolledSection.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleModal = (): void => {
    toggleModalOpened(!modalIsOpened);
  };

  const handleModalClose = (): void => {
    toggleModalOpened(false);
  };

  const handleOrdersStopModalClose = (): void => {
    toggleOrdersStopModalOpened(false);
  };

  const handleShopModalClose = (): void => {
    toggleShopModalOpened(false);
  };

  useEffect(() => {
    window.onscroll = () => {
      setPageOffset(window.pageYOffset);
    };
  }, []);

  return (
    <StyledFooter id="footer">
      <StyledContainer>
        <StyledLayout>
          <StyledLogo>
            <Link href="/" passHref>
              <StyledLogoLink>
                <Image alt="Logo" layout="fill" src="/images/logo_img.png" />
              </StyledLogoLink>
            </Link>
          </StyledLogo>

          {inner ? (
            <>
              {menuItems && (
                <StyledMenu>
                  <StyledMenuList>
                    {!!menuItems.length &&
                      menuItems.map(
                        (
                          { anchor, text }: TMenuItem,
                          index: number
                        ): React.ReactElement => (
                          <StyledMenuItem key={`${index}-${anchor}`}>
                            <Link href={anchor} passHref>
                              <StyledMenuLink>{text}</StyledMenuLink>
                            </Link>
                          </StyledMenuItem>
                        )
                      )}
                  </StyledMenuList>
                </StyledMenu>
              )}
            </>
          ) : (
            <>
              {menuItems && (
                <StyledMenu>
                  <StyledMenuList>
                    {!!menuItems.length &&
                      menuItems.map(
                        (
                          { anchor, text }: TMenuItem,
                          index: number
                        ): React.ReactElement => (
                          <StyledMenuItem key={`${index}-${anchor}`}>
                            <StyledMenuLink
                              onClick={() => handleScroll(anchor)}
                            >
                              {text}
                            </StyledMenuLink>
                          </StyledMenuItem>
                        )
                      )}
                  </StyledMenuList>
                </StyledMenu>
              )}
            </>
          )}

          {contactsLinks && !!contactsLinks.length && (
            <StyledContacts>
              <StyledContactsList>
                {contactsLinks.map(
                  (
                    { type, url }: TContactsLink,
                    index: number
                  ): React.ReactElement => (
                    <StyledContactsItem
                      key={`footer-contact-${index}`}
                      type={type}
                    >
                      <StyledContactsLink href={url} target="_blank" />
                    </StyledContactsItem>
                  )
                )}
              </StyledContactsList>
            </StyledContacts>
          )}

          <StyledItem>
            <StyledLink href="tel:+420792745116">+420 792 745 116</StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink href={`/images/${allergenyImage}`} target="_blank">
              {allergeny}
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <Link href="/terms" passHref>
              <StyledLink>Všeobecné obchodní podmínky</StyledLink>
            </Link>
          </StyledItem>

          <StyledItem>
            <Link href="/rules" passHref>
              <StyledLink>Zásady ochrany osobních údajů</StyledLink>
            </Link>
          </StyledItem>

          <StyledText>Provozovna: Husitská 187/60</StyledText>
          <StyledText>MSN form s.r.o., IČ: 099 07 017</StyledText>
          <StyledEmail href="mailto:sushimanprague@gmail.com" target="_blank">
            sushimanprague@gmail.com
          </StyledEmail>
        </StyledLayout>
      </StyledContainer>

      <StyledCopy>
        <StyledCopyText>
          Created by{" "}
          <StyledCopyLink href="http://webrave.cz" target="_blank">
            webrave.cz
          </StyledCopyLink>
        </StyledCopyText>
      </StyledCopy>

      {!shopSettings.shopIsClosed && <Cart />}

      <StyledScrollButton
        onClick={handleScrollTop}
        isHidden={pageOffset < 800}
        type="button"
      >
        <SvgArrowTopIcon />
      </StyledScrollButton>

      <StyledChatButton onClick={handleModal} type="button">
        <SvgChatIcon />
      </StyledChatButton>

      <Modal
        close={handleModalClose}
        contactsLinks={contactsLinks}
        isOpened={modalIsOpened}
        text={modalText}
        title={modalTitle}
      />

      {shopSettings.ordersStop && (
        <Modal
          close={handleOrdersStopModalClose}
          contactsLinks={contactsLinks}
          isOpened={ordersStopModalIsOpened}
          text={modalOrder.text}
          title={modalOrder.title}
        />
      )}

      {shopSettings.shopIsClosed && (
        <ModalDay
          close={handleShopModalClose}
          contactsLinks={contactsLinks}
          isOpened={shopModalIsOpened}
          text={modalDay.text}
          title={modalDay.title}
        />
      )}
    </StyledFooter>
  );
};

export { Footer };
