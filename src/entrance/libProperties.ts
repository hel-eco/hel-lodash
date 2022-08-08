import * as lodash from 'lodash';
import * as utils from '../utils';

const myLodash = {
  ...lodash,
  myUtils: utils,
};

export type LibProperties = typeof myLodash;

export default myLodash;
