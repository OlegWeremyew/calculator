import styled from 'styled-components';

import { ThemeType } from '../../../../../types/themeType';

export const HistoryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  font-weight: 700;
`;

export const HistoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 30px;
  cursor: pointer;
  background: ${({ theme }: ThemeType) => theme.background};
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 20px;
  border-radius: 3px;

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:active {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }
`;
