import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  color: ${(props) => props.theme.secondary2}};
`;
