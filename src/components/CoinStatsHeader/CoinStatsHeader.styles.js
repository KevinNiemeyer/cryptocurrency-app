import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.secondary2};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  text-align: right;
  align-items: flex-end;
  justify-content: right;
  margin-bottom: 0.5em;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
`;

export const P = styled.p`
  font-size: ${(props) => (props.big ? '2rem' : '1.5rem')};
  color: ${(props) => (props.change < 0 ? 'red' : 'green')};
`;
