import styled from 'styled-components';

import { ThemeType } from 'types/themeType';

export const DisplayContainer = styled.div`
  max-width: 420px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: ${({ theme }: ThemeType) => theme.displayBgc};
  font-size: 30px;
  margin-bottom: 1px;
  border-bottom: ${({ theme }: ThemeType) => theme.border} 3px solid;

  @media (max-width: 445px) {
    width: 310px;
    font-size: 24px;
  }
`;
