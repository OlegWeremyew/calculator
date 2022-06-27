import React, { FC } from 'react';

import { DisplayContainer } from './components';

import { useGetCurrentValueFromLocalStorage } from 'utils';

export const Display: FC = () => {
  const currentValue = useGetCurrentValueFromLocalStorage();

  return <DisplayContainer>{currentValue || 'lets start 🖩'}</DisplayContainer>;
};
