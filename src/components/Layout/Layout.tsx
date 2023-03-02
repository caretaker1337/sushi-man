import React from "react";
import NotificationsSystem, { useNotifications } from "reapop";

import useTranslation from "~/intl/useTranslation";
import { LayoutHead } from "./LayoutHead";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { GlobalStyle } from "~/theme/global-style";
import { theme, ThemeProvider } from "~/theme";
import { StyledWrapper, StyledContent } from "./styled";

interface TLayout {
  title: string;
}

const Layout: React.FC<TLayout> = ({ children, title }) => {
  const { notifications, dismissNotification } = useNotifications();
  const { t } = useTranslation();

  const mainMenu = t("mainMenu");

  return (
    <>
      <LayoutHead title={title} />

      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <StyledWrapper>
          <Header menuItems={mainMenu} />
          <StyledContent>{children}</StyledContent>
          <Footer menuItems={mainMenu} />
        </StyledWrapper>

        <NotificationsSystem
          dismissNotification={(id: string) => dismissNotification(id)}
          notifications={notifications}
        />
      </ThemeProvider>
    </>
  );
};

export { Layout };
