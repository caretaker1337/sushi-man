import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { useStore } from "~/store";
import { SvgCartIcon } from "~/icons";
import { StyledWrapper, StyledLink, StyledAmount, StyledIcon } from "./styled";

const Cart: React.FC = () => {
  const { store } = useStore();
  const { cart } = store;
  const { products } = cart;
  const [animate, setAnimate] = useState<boolean>(false);
  const isInitialMount = useRef(true);

  useEffect((): void => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  }, [products]);

  return (
    <StyledWrapper productsChanged={animate}>
      <Link href="/cart" passHref>
        <StyledLink>
          <StyledIcon>
            <SvgCartIcon />
          </StyledIcon>
        </StyledLink>
      </Link>

      <StyledAmount>{products.length}</StyledAmount>
    </StyledWrapper>
  );
};

export { Cart };
