import React, { FC } from 'react';

import { useGetCurrentValueFromLocalStorage } from '../../utils';

import { DisplayContainer } from './components';

export const Display: FC = () => {
  const currentValue = useGetCurrentValueFromLocalStorage();

  return <DisplayContainer>{currentValue || 'lets start 🖩'}</DisplayContainer>;
};
