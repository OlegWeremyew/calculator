import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import { LoaderBlock, LoaderContainer } from './components';

export const Loader = (): ReturnComponentType => (
  <LoaderContainer>
    <LoaderBlock>⟳</LoaderBlock>
  </LoaderContainer>
);
