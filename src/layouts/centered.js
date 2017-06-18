// @flow

import styled from 'styled-components';

const space = 30;

export default styled.div`
  .header {
    text-align: center;
    margin: ${space}px 0;
    h1 {
      margin: 0 0 ${space / 2}px 0;
      font-size: 3rem;
    }
    .header--slogan {
      font-size: 1.2rem;
    }
  }
  
  main {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .footer {
    margin: ${space}px;
    text-align: center;
  }
  
  .post {
    margin: ${space / 2}px ${space}px ${space}px;
    h1 {
      margin: 0;
    }
  }
  
  .post .post--body {
    margin: ${space / 2}px 0;
  }
  
  .post--info {
    margin: ${space / 2}px 0;
  }
  
  .post--info span:not(:first-child){
    border-left:1px solid #000;
    padding-left: 5px;
  }
  
  .post--info span:first-child {
    padding-right: 5px;
  }
`;
