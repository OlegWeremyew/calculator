import styled from 'styled-components';

import { ThemeType } from '../../../types/themeType';

export const KeypadButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }: ThemeType): string => theme.background};
`;
