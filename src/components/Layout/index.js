import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import config from '../../../config';

export default (Page, title) => ({ ...props }) =>
  <ThemeProvider theme={config.theme.colors}>
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Page {...props} />
      </main>
    </div>
  </ThemeProvider>;
