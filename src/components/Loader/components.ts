import styled from 'styled-components';

import { rotateAnimation } from '../../layouts';
import { ThemeType } from '../../types/themeType';

export const LoaderContainer = styled.div`
  animation: ${rotateAnimation} 5s infinite linear;
  font-size: 120px;
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 250px;
  color: ${({ theme }: ThemeType) => theme.color};
  background: ${({ theme }: ThemeType) => theme.background};
`;
