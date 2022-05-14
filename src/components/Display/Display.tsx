import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';
import { useGetCurrentValueFromLocalStorage } from '../../utils';

import { DisplayContainer } from './components';

export const Display = (): ReturnComponentType => {
  const currentValue = useGetCurrentValueFromLocalStorage();

  return <DisplayContainer>{currentValue || 'lets start 🖩'}</DisplayContainer>;
};
