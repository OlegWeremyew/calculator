import styled from 'styled-components';

import { ThemeType } from 'types/themeType';

export const CalculatorContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px;

  @media (max-width: 835px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CalculatorBlock = styled(CalculatorContainer)``;

export const StyledBlock = styled.article`
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  min-width: 200px;
  height: 675px;

  @media (max-width: 445px) {
    height: 533px;
  }
`;
