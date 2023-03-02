import React, { useEffect } from "react";
import { NextPage } from "next";
import { gql } from "@apollo/client";
import { isBefore, isAfter } from "date-fns";

import client from "~/apollo-client";
import {
  TModalDay,
  TModalOrder,
  TSchedule,
  TShopSettings,
  setModalDay,
  setModalOrder,
  setSchedule,
  setShopSettings,
  useStore,
} from "~/store";
import useTranslation from "~/intl/useTranslation";
import {
  About,
  Banner,
  Contacts,
  Delivery,
  Layout,
  Media,
  Products,
  Reviews,
  TAbout,
  TBanner,
  TDelivery,
  TMedia,
  TReview,
} from "~/components";

import HomePageQuery from "~/queries/homepage.gql";

interface TProps {
  about: {
    about_cs: TAbout;
    about_ru: TAbout;
  };
  banner: {
    banner_cs: TMedia;
    banner_ru: TMedia;
  };
  delivery: TDelivery;
  hero: {
    hero_cs: TBanner;
    hero_ru: TBanner;
  };
  modalDay: TModalDay;
  modalOrder: TModalOrder;
  reviews: TReview[];
  schedule: {
    schedule_cs: TSchedule;
    schedule_ru: TSchedule;
  };
  shopSettings: TShopSettings;
}

const IndexPage: NextPage<TProps> = ({
  about,
  banner,
  delivery,
  hero,
  modalDay,
  modalOrder,
  reviews,
  schedule,
  shopSettings,
}) => {
  const { dispatch } = useStore();
  const { t } = useTranslation();
  const productsTitle = t("productsTitle");
  const mainTitle = t("mainTitle");

  useEffect((): void => {
    dispatch(setShopSettings(shopSettings));
    dispatch(setSchedule(schedule));
    dispatch(setModalDay(modalDay));
    dispatch(setModalOrder(modalOrder));
  }, [shopSettings, schedule, modalDay, modalOrder]);

  return (
    <Layout title={mainTitle}>
      <Banner
        hero={{
          hero_cs: hero["hero_cs"],
          hero_ru: hero["hero_ru"],
        }}
      />
      <Media
        banner={{
          banner_cs: banner["banner_cs"],
          banner_ru: banner["banner_ru"],
        }}
      />
      <About
        about={{
          about_cs: about["about_cs"],
          about_ru: about["about_ru"],
        }}
      />
      <Contacts
        schedule={{
          schedule_cs: schedule["schedule_cs"],
          schedule_ru: schedule["schedule_ru"],
        }}
      />
      <Products title={productsTitle} />
      <Delivery
        deliveryTitle={{
          deliveryTitle_cs: delivery.deliveryTitle["deliveryTitle_cs"],
          deliveryTitle_ru: delivery.deliveryTitle["deliveryTitle_ru"],
        }}
        deliveryItems={delivery.deliveryItems}
      />
      <Reviews reviews={reviews} />
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  const date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Prague" })
  );
  const currentDay = date.getDay();
  const {
    data: {
      about_cs,
      about_ru,
      banner_cs,
      banner_ru,
      days,
      deliveryItems,
      deliveryTitle_cs,
      deliveryTitle_ru,
      hero_cs,
      hero_ru,
      modalDay,
      modalOrder,
      reviews,
      schedule_cs,
      schedule_ru,
      shop,
    },
  } = await client.query({
    query: gql`
      ${HomePageQuery}
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
    about: {
      about_cs,
      about_ru,
    },
    banner: {
      banner_cs,
      banner_ru,
    },
    delivery: {
      deliveryTitle: {
        deliveryTitle_cs,
        deliveryTitle_ru,
      },
      deliveryItems,
    },
    hero: {
      hero_cs,
      hero_ru,
    },
    modalDay,
    modalOrder,
    reviews,
    schedule: {
      schedule_cs,
      schedule_ru,
    },
    shopSettings: {
      ...shop,
      shopIsClosed: checkShopIsClosed(),
    },
  };
};

export default IndexPage;
