import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;
  color: ${(props) => props.theme.secondary2};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  text-align: right;
`;

export const Header = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.8em;
  &:first-of-type {
    margin-right: 3.25em;
  }
`;

export const Data = styled.p`
  margin-bottom: 1.5em;
  &:first-of-type {
    margin-right: 4em;
  }
`;
