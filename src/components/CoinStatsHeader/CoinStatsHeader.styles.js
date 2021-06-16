import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.secondary2};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  text-align: right;
  align-items: flex-end;
  justify-content: right;
  margin: 0.5em;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  padding-right: 0.5em;
`;

export const P = styled.p`
  font-size: ${(props) => (props.big ? '2rem' : '1.5rem')};
  color: ${(props) => (props.change < 0 ? 'red' : 'green')};
`;
