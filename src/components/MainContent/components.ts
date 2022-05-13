import styled from 'styled-components';

import { ThemeType } from '../../types/themeType';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: ${({ theme }: ThemeType) => theme.background};
  color: ${({ theme }: ThemeType) => theme.color};
`;
