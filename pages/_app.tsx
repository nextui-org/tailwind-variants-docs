import React from "react";
import { Inter } from "next/font/google";
import { SSRProvider } from "@react-aria/ssr";
import { Analytics } from "@vercel/analytics/react";
import { isProd } from "@utils";
import "../styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      {isProd && <Analytics />}
    </>
  );
};

const sans = Inter({
  adjustFontFallback: true,
  display: "optional",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  preload: true,
  style: "normal",
  subsets: ["latin"],
  weight: "variable",
});

export const fonts = {
  sans: sans.style.fontFamily,
};

export default MyApp;
