import styled from 'styled-components';

import { rotateAnimation } from '../../layouts';
import { ThemeType } from '../../types/themeType';

export const HeaderContainer = styled.header`
  height: 65px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  border-bottom: 2px dashed ${({ theme }: ThemeType) => theme.border};
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  animation: ${rotateAnimation} 8s infinite linear;
`;
