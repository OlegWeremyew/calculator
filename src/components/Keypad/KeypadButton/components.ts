import styled from 'styled-components';

import { ThemeType } from '../../../theme';

export const KeypadButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }: ThemeType): string => theme.background};
`;
