import styled from 'styled-components';

import { ThemeType } from '../../types/themeType';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 30px 0;
`;

export const ReturnButton = styled.button`
  width: 300px;
  height: 60px;
  font-size: 25px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  color: ${({ theme }: ThemeType) => theme.color};
  cursor: pointer;
  border-radius: 5px;
  border: ${({ theme }: ThemeType) => theme.border} 2px solid;

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:active {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }
`;
