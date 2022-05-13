import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const OperandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }: ThemeType) => theme.background};
`;
