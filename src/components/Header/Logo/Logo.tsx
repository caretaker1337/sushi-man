import React from "react";
import Link from "next/link";
import Image from "next/image";

import { StyledWrapper, StyledLink } from "./styled";

const Logo: React.FC = () => (
  <StyledWrapper>
    <Link href="/" passHref>
      <StyledLink>
        <Image alt="Logo" layout="fill" src="/images/logo_img.png" />
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { Logo };
