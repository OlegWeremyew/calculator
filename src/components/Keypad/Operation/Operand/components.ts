import styled from 'styled-components';

import { ThemeType } from '../../../../theme';

export const OperandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }: ThemeType) => theme.background};
`;
