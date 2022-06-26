import React, { FC } from 'react';

import { LoaderBlock, LoaderContainer } from './components';

export const Loader: FC = () => (
  <LoaderContainer>
    <LoaderBlock>⟳</LoaderBlock>
  </LoaderContainer>
);
