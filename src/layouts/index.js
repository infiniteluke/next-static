// @flow
import type { Element } from 'react';
import { type Layout } from '../../types/layout';
import centered from './centered';
import none from './none';

const layouts: {
  [Layout]: () => Element<*>,
} = {
  centered,
  none,
};

export default layouts;
