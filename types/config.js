// @flow

import { type Theme } from './theme';
import { type Layout } from './layout';

export type Config = {|
  +siteName: string,
  +layout: Layout,
  +theme: Theme,
|};
