// @flow

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en-US">
        <Head>
          {styleTags}
          <style type="text/css">
            {styledNormalize}
          </style>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css"
          />
        </body>
      </html>
    );
  }
}
