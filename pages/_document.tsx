import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { SkipNavLink } from "nextra-theme-docs";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
