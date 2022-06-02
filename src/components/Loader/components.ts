import styled from 'styled-components';

import { rotateAnimation } from '../../layouts';
import { ThemeType } from '../../types/themeType';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }: ThemeType) => theme.background};
`;

export const LoaderBlock = styled.div`
  animation: ${rotateAnimation} 5s infinite linear;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  font-size: 180px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: ThemeType) => theme.color};
  background: ${({ theme }: ThemeType) => theme.background};
`;
