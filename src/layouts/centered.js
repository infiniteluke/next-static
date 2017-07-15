// @flow

import styled from 'styled-components';

const space = 30;
const medium = '700px';

export default styled.div`
  a {
    text-decoration: none;
  }

  .header {
    text-align: center;
    padding: ${space * 2}px ${space / 2}px;
    h1 {
      letter-spacing: 1px;
      margin: 0 0 ${space / 2}px 0;
      font-size: 3rem;
    }
    .header--slogan {
      font-size: 1.2rem;
    }
  }

  main {
    max-width: 500px;
    @media (min-width: ${medium}) {
      max-width: 700px;
    }
    margin: ${space}px auto;
  }

  .home-link {
    margin-left: ${space}px;
  }

  .footer {
    padding: ${space}px;
    text-align: center;
  }

  .post {
    margin: ${space / 2}px ${space}px ${space}px;
    h1 {
      display: inline-block;
      margin: 0;
    }
  }

  .post .post--body {
    margin: ${space / 2}px 0;
  }

  .post--info {
    margin: ${space / 2}px 0;
  }

  .post--info span:not(:first-child) {
    border-left: 1px solid #000;
    padding-left: 5px;
  }

  .post--info span:first-child {
    padding-right: 5px;
  }
`;
