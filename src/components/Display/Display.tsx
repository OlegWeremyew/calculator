import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';
import { getCurrentValueFromLocalStorage } from '../../utils';

import { DisplayContainer } from './components';

const Display = (): ReturnComponentType => {
  const currentValue = getCurrentValueFromLocalStorage();

  return <DisplayContainer>{currentValue || 'lets start 🖩'}</DisplayContainer>;
};

export default Display;
