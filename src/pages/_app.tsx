import React from "react";
import Script from "next/script";
import { AppProps } from "next/app";
import { NotificationsProvider } from "reapop";

import { LanguageProvider } from "../intl/LanguageProvider";
import { AppProvider } from "~/store/context";

const App = ({ Component, pageProps, router }: AppProps) => (
  <>
    <Script
      id="google-maps"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAelVTTeDWjXmX7yF_m83ebT7GbJZsNaUY&libraries=places"
      strategy="beforeInteractive"
    />
    <Script
      id="googleTagManager"
      src="https://www.googletagmanager.com/gtag/js?id=G-CEW5H8WB6K"
      strategy="beforeInteractive"
    />
    <Script id="google" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-CEW5H8WB6K");
      `}
    </Script>
    <Script id="facebook" strategy="beforeInteractive">
      {`
        !(function (f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        );
        fbq("init", "3473434059547685");
        fbq("track", "PageView");
      `}
    </Script>
    <Script id="yandex" strategy="beforeInteractive">
      {`
        (function (m, e, t, r, i, k, a) {
          m[i] =
            m[i] ||
            function () {
              (m[i].a = m[i].a || []).push(arguments);
            };
          m[i].l = 1 * new Date();
          (k = e.createElement(t)),
            (a = e.getElementsByTagName(t)[0]),
            (k.async = 1),
            (k.src = r),
            a.parentNode.insertBefore(k, a);
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(78947092, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        });      
      `}
    </Script>
    <AppProvider>
      <NotificationsProvider>
        <LanguageProvider>
          <Component {...pageProps} key={router.route} />
        </LanguageProvider>

        <style jsx global>{`
          @font-face {
            font-family: "Avenir";
            font-style: normal;
            src: url("/fonts/AvenirNext-Regular.woff");
          }
          @font-face {
            font-family: "AvenirBold";
            font-style: normal;
            src: url("/fonts/AvenirNext-Bold.woff");
          }
          @font-face {
            font-family: "AvenirMedium";
            font-style: normal;
            src: url("/fonts/AvenirNext-Medium.woff");
          }
        `}</style>
      </NotificationsProvider>
    </AppProvider>
  </>
);

export default App;
