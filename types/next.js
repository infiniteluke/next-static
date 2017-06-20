// @flow

import { type Element } from 'react';
import { type Request } from './request';

export type NextPage = (props: Request) => Element<*>;
