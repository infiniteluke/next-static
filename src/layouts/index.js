// @flow
import { type Layout } from '../../types/layout';
import centered from './centered';

const layouts: {
  [Layout]: centered,
} = {
  centered,
};

export default layouts;
