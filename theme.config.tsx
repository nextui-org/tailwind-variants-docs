import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { Logo, NextUILogo, tvs } from "@components";

// get the package version from package.json
const pkg = require("./package.json");
const tvVersion =
  pkg?.dependencies?.["tailwind-variants"]?.replace("^", "") ?? "0.0.12";

const config: DocsThemeConfig = {
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  logo: (
    <div className="flex items-center">
      <Logo height={30} />
      <b className="ml-1.5 font-semibold">tailwind-variants</b>
      <span className={tvs.badge({ class: "hidden sm:flex" })}>
        v{tvVersion}
      </span>
    </div>
  ),
  head: function useHead() {
    const config = useConfig();
    const description =
      config.frontMatter.description ||
      "The power of Tailwind combined with a first-class variant API.";
    const image = config.frontMatter.image;

    // || "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg";

    return (
      <>
        {/* Favicons, meta */}
        <link
          href="/favicon/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link
          color="#000000"
          href="/favicon/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content={description} name="description" />
        <meta content={description} name="og:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@nextui-org" name="twitter:site" />
        <meta content={image} name="twitter:image" />
        <meta content={`${config.title} – tailwind-variants`} name="og:title" />
        <meta content={image} name="og:image" />
        <meta content="tailwind-variants" name="apple-mobile-web-app-title" />
      </>
    );
  },
  useNextSeoProps: function SEO() {
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle || "tailwind-variants";

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – ${defaultTitle}`,
    };
  },
  project: {
    link: "https://github.com/nextui-org/tailwind-variants",
  },
  chat: {
    link: "https://discord.gg/9b6yyZKmH4",
  },
  docsRepositoryBase: "https://github.com/nextui-org/tailwind-variants",
  gitTimestamp: "",
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            href="https://nextui.org?utm_source=tailwind-variants.org"
            rel="noopener noreferrer"
            target="_blank"
            title="nextui.org homepage"
          >
            <span className="mr-1">Powered by</span>
            <NextUILogo height={30} />
          </a>
        </div>
        <p className="mt-6 text-xs">
          Created by&nbsp;
          <a
            className="text-blue-500 font-semibold"
            href="https://jrgarciadev.com"
            rel="noreferrer"
            target="_blank"
          >
            Junior Garcia&nbsp;
          </a>
          - Based on&nbsp;
          <a
            className="text-blue-500 font-semibold"
            href="https://github.com/joe-bell/cva"
            rel="noreferrer"
            target="_blank"
          >
            CVA
          </a>
        </p>
        <p className="mt-6 text-xs">
          MIT {new Date().getFullYear()} The tailwind-variants project.
        </p>
      </div>
    ),
  },
};

export default config;
