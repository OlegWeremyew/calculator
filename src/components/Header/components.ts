import styled from 'styled-components';

import { rotateAnimation } from 'layouts';
import { ThemeType } from 'types/themeType';

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
  transition: height 0.3s linear, width 0.3s linear;

  &:hover {
    width: 43px;
    height: 43px;
    transition: height 0.3s linear, width 0.3s linear;
  }
`;
