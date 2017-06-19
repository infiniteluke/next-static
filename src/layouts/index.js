// @flow
import type { Element } from 'react';
import { type Layout } from '../../types/layout';
import centered from './centered';

const layouts: {
  [Layout]: () => Element<*>,
} = {
  centered,
};

export default layouts;
