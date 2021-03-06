import styled from 'styled-components';

export const KeypadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  align-items: center;

  @media (max-width: 445px) {
    width: 310px;
  }
`;
