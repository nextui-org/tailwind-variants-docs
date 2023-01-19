import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

import { Logo, NextUILogo } from "./components";

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center">
      <Logo />
      <b className="ml-2 font-medium">tailwind-variants</b>
    </div>
  ),
  project: {
    link: "https://github.com/nextui-org/tailwind-variants",
  },
  chat: {
    link: "https://discord.gg/9b6yyZKmH4",
  },
  docsRepositoryBase: "https://github.com/nextui-org/tailwind-variants",
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
            <span className="mr-2">Powered by</span>
            <NextUILogo height={30} />
          </a>
        </div>
        <p className="mt-6 text-xs">
          Created by&nbsp;
          <a
            className="text-blue-600"
            href="https://jrgarciadev.com"
            rel="noreferrer"
            target="_blank"
          >
            Junior Garcia
          </a>
        </p>
        <p className="mt-6 text-xs">
          ©{new Date().getFullYear()} The tailwind-variants project.
        </p>
      </div>
    ),
  },
};

export default config;
