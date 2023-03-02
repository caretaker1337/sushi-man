import React, { useEffect } from "react";
import Head from "next/head";
import smoothscroll from "smoothscroll-polyfill";

import useTranslation from "~/intl/useTranslation";

interface TProps {
  title: string;
}

const LayoutHead: React.FC<TProps> = ({ title }) => {
  const { t } = useTranslation();
  const metaDescription = t("metaDescription");

  useEffect((): void => {
    smoothscroll.polyfill();
  }, []);

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content={metaDescription} />
      <meta name="yandex-verification" content="2d640540016895e1" />
    </Head>
  );
};

export { LayoutHead };
