// @flow

import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import config from '../../../config';
import Footer from '../Footer';
import Header from '../Header';
import { type Request } from '../../../types/request';
import { type NextPage } from '../../../types/next';
import Layouts from '../../layouts';
import theme, { defaultColors } from '../../lib/theme';

const Layout = Layouts[config.layout || 'none'];

const Theme = styled.div`
  font-family: sans-serif;
  color: ${theme.main};
  a {
    color: ${theme.accent};
  }
  a:hover {
    color: ${theme.accent.lighten(0.2)};
  }
  a:visited {
    color: ${theme.accent.darken(0.2)};
  }
`;

export default (Page: NextPage, title: string) => ({ ...props }: Request) =>
  <ThemeProvider theme={config.theme ? config.theme.colors : defaultColors}>
    <Layout>
      <Theme>
        <Head>
          <title>{`${config.siteName} - ${title}`}</title>
        </Head>
        <Header />
        <main className="main">
          <Page {...props} />
        </main>
        <Footer className="footer" />
      </Theme>
    </Layout>
  </ThemeProvider>;
