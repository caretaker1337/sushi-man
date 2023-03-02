import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

const MenuPage: React.FC = () => {
  const router = useRouter();

  useEffect((): void => {
    router.push("https://sushi-man.cz/?utm_source=instagram&utm_medium=head");
  }, [router]);

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default MenuPage;
