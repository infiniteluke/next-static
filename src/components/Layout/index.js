// @flow

import React, { type Element } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import config from '../../../config';
import Footer from '../Footer';
import Header from '../Header';
import { type Request } from '../../../types/request';
import Layouts from '../../layouts';

const Cool = Layouts[config.layout];

export default (Page: (props: Request) => Element<*>, title: string) => ({
  ...props
}: Request) =>
  <ThemeProvider theme={config.theme.colors}>
    <Cool>
      <Head>
        <title>{`${config.siteName} - ${title}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="main">
        <Page {...props} />
      </main>
      <Footer className="footer" />
    </Cool>
  </ThemeProvider>;
