import React from "react";
import NotificationsSystem, { useNotifications } from "reapop";

import { LayoutHead } from "./LayoutHead";
import useTranslation from "~/intl/useTranslation";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { GlobalStyle } from "~/theme/global-style";
import { theme, ThemeProvider } from "~/theme";
import { StyledWrapper, StyledContent } from "./styled";

interface TLayout {
  title: string;
}

const LayoutSecondary: React.FC<TLayout> = ({ children, title }) => {
  const { notifications, dismissNotification } = useNotifications();
  const { t } = useTranslation();
  const innerMenu = t("innerMenu");

  return (
    <>
      <LayoutHead title={title} />

      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <StyledWrapper>
          <Header inner menuItems={innerMenu} />
          <StyledContent>{children}</StyledContent>
          <Footer inner menuItems={innerMenu} />
        </StyledWrapper>

        <NotificationsSystem
          dismissNotification={(id: string) => dismissNotification(id)}
          notifications={notifications}
        />
      </ThemeProvider>
    </>
  );
};

export { LayoutSecondary };
