// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import config from '../../../config';

export default () =>
  <header className="header">
    <h1 className="header--siteName">{config.siteName}</h1>
    <div className="header--slogan">{config.slogan}</div>
  </header>;
