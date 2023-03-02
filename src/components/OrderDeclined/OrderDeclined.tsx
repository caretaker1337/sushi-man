import React, { useEffect } from "react";
import Link from "next/link";

import { useStore } from "~/store";
import { TActionTypes } from "~/store/actions";
import { StyledContainer } from "~/components/Layout/styled";
import {
  StyledWrapper,
  StyledLayout,
  StyledTitle,
  StyledImageHolder,
  StyledImage,
  StyledButton,
} from "./styled";

const OrderDeclined: React.FC = () => {
  const { dispatch } = useStore();

  useEffect((): void => {
    dispatch({
      payload: {},
      type: TActionTypes.CLEAR_STORE,
    });
  }, []);

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledLayout>
          <StyledTitle>Transakce ne proběhla úspěšně!</StyledTitle>
          <StyledImageHolder>
            <StyledImage alt="Sushi-man" src="/images/sushi-man_img.jpg" />
          </StyledImageHolder>
          <Link href="/" passHref>
            <StyledButton>Hlavní stránka</StyledButton>
          </Link>
        </StyledLayout>
      </StyledContainer>
    </StyledWrapper>
  );
};

export { OrderDeclined };
