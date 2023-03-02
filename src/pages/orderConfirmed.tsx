import React from "react";
import { NextPage } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { TBanner, Banner, LayoutSecondary, OrderConfirmed } from "~/components";

import OrderConfirmedPageQuery from "~/queries/rulespage.gql";

interface TProps {
  hero: {
    hero_cs: TBanner;
    hero_ru: TBanner;
  };
}

const OrderConfirmedPage: NextPage<TProps> = ({ hero }) => (
  <LayoutSecondary title="Sushi Man | Order Confirmed">
    <Banner
      hero={{
        hero_cs: hero["hero_cs"],
        hero_ru: hero["hero_ru"],
      }}
      inner
    />
    <OrderConfirmed />
  </LayoutSecondary>
);

OrderConfirmedPage.getInitialProps = async () => {
  const {
    data: { hero_cs, hero_ru },
  } = await client.query({
    query: gql`
      ${OrderConfirmedPageQuery}
    `,
  });

  return {
    hero: {
      hero_cs,
      hero_ru,
    },
  };
};

export default OrderConfirmedPage;
