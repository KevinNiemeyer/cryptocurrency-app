import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
  width: 50%;
  font-size: 1.5rem;
  padding: 0.5em;
  background: ${(props) => props.theme.background2};
  outline: none;
  border: solid 0.5px ${(props) => props.theme.accent2};
  color: ${(props) => props.theme.secondary2};
`;
