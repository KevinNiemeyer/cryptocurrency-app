import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LI = styled.li`
  width: 100%;
  margin: 0.5rem auto;
  width: 90%;
  color: ${(props) => props.theme.accent};
  background: inherit;
  padding: 2em 1em 0.5em 1em;
  display: grid;
  grid-template-columns: 7% 12% 11.57% 11.57% 11.57% 11.57% 11.57% 11.57% 11.57%;
  align-items: end;
`;

export const P = styled.p`
  font-weight: 700;
`;
