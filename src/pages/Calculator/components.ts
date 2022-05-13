import styled from 'styled-components';

import { ThemeType } from '../../theme';

export const CalculatorContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledBlock = styled.article`
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  min-width: 200px;
  height: 608px;

  @media (max-width: 445px) {
    height: 457px;
  }
`;
