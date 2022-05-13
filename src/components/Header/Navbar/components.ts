import styled from 'styled-components';

import { ThemeType } from '../../../theme';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin-right: 10px;
  color: ${({ theme }: ThemeType) => theme.color};
`;
