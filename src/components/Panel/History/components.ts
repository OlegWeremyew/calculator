import styled from 'styled-components';

import { ThemeType } from '../../../theme';

export const HistoryContainer = styled.article`
  font-size: 20px;
  padding: 10px;
  margin-left: 15px;
  width: 320px;
  margin-top: 10px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;

  @media (max-width: 800px) {
    width: 420px;
    margin-left: 0;
    margin-top: 10px;
  }

  @media (max-width: 445px) {
    width: 314px;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 0 0 10px 0;
`;
