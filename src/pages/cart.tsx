import React, { useEffect } from "react";
import { NextPage } from "next";
import { gql } from "@apollo/client";
import { isBefore, isAfter } from "date-fns";

import client from "~/apollo-client";
import {
  TAdditional,
  TShopSettings,
  setAdditionals,
  setShopSettings,
  useStore,
  TSchedule,
  TModalDay,
  setModalDay,
} from "~/store";
import useTranslation from "~/intl/useTranslation";
import { Banner, Cart, LayoutSecondary, TBanner, Products } from "~/components";

import CartPageQuery from "~/queries/cartpage.gql";

interface TProps {
  additionals: TAdditional[];
  hero: {
    hero_cs: TBanner;
    hero_ru: TBanner;
  };
  modalDay: TModalDay;
  shopSettings: TShopSettings;
  schedule: {
    schedule_cs: TSchedule;
    schedule_ru: TSchedule;
  };
}

const CartPage: NextPage<TProps> = ({
  additionals,
  hero,
  modalDay,
  shopSettings,
}) => {
  const { dispatch } = useStore();
  const { t } = useTranslation();
  const productsTitle = t("recommendedTitle");
  const cartTitle = t("cartTitle");
  const newAdditionals = additionals.map((additional: TAdditional) => ({
    ...additional,
    quantity: 0,
  }));

  useEffect((): void => {
    dispatch(setAdditionals(newAdditionals));
    dispatch(setShopSettings(shopSettings));
    dispatch(setModalDay(modalDay));
  }, [additionals, shopSettings, modalDay]);

  return (
    <LayoutSecondary title={cartTitle}>
      <Banner
        hero={{
          hero_cs: hero["hero_cs"],
          hero_ru: hero["hero_ru"],
        }}
        inner
      />
      <Cart />
      <Products inner title={productsTitle} />
    </LayoutSecondary>
  );
};

CartPage.getInitialProps = async () => {
  const date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Prague" })
  );
  const currentDay = date.getDay();
  const {
    data: {
      additionals,
      days,
      hero_cs,
      hero_ru,
      modalDay,
      shop,
      schedule_cs,
      schedule_ru,
    },
  } = await client.query({
    query: gql`
      ${CartPageQuery}
    `,
    variables: {
      where: {
        dayOrder: currentDay,
      },
    },
  });

  const checkShopIsClosed = (): boolean => {
    const hoursFrom = days[0].timeFrom.split(":")[0];
    const hoursTo = days[0].timeTo.split(":")[0];
    const minutesFrom = days[0].timeFrom.split(":")[1];
    const minutesTo = days[0].timeTo.split(":")[1];
    const timeFrom = new Date(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hoursFrom,
        minutesFrom,
        0
      ).toLocaleString("en-US", { timeZone: "Europe/Prague" })
    );
    const timeTo = new Date(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hoursTo,
        minutesTo,
        0
      ).toLocaleString("en-US", { timeZone: "Europe/Prague" })
    );

    const compareResultFrom: boolean = isBefore(
      new Date(
        new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          0
        ).toLocaleString("en-US", { timeZone: "Europe/Prague" })
      ),
      timeFrom
    );
    const compareResultAfter: boolean = isAfter(
      new Date(
        new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          0
        ).toLocaleString("en-US", { timeZone: "Europe/Prague" })
      ),
      timeTo
    );

    return compareResultFrom || compareResultAfter;
  };

  return {
    additionals,
    modalDay,
    hero: {
      hero_cs,
      hero_ru,
    },
    shopSettings: {
      ...shop,
      shopIsClosed: checkShopIsClosed(),
    },
    schedule: {
      schedule_cs,
      schedule_ru,
    },
  };
};

export default CartPage;
