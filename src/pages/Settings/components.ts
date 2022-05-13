import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;

  @media (max-width: 520px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 310px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 15px;
  margin-top: 10px;
  text-align: center;
`;
