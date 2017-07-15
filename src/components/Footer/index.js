// @flow

import React from 'react';
import styled from 'styled-components';
import theme from '../../lib/theme';

const Footer = styled.header`
  background-color: ${theme.main};
  color: ${theme.light.lighten(0.3)};
  a,
  a:visited {
    color: ${theme.light.lighten(0.3)};
  }
`;

export default () =>
  <Footer className="footer">
    <small className="footer--madeWith">
      Made with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>{' '}
      and{' '}
      <a href="https://github.com/infiniteluke/next-static">
        Next Static{' '}
        <span role="img" aria-label="with extra sparkles">
          ✨
        </span>
      </a>
    </small>
  </Footer>;
