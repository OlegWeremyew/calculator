import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
`;

export const Title = styled.h1`
  font-size: 28px;

  @media (max-width: 520px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;
