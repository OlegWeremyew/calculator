import styled from 'styled-components';

import { ThemeType } from '../../../types/themeType';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  margin-right: 10px;
  color: ${({ theme }: ThemeType) => theme.color};
`;
