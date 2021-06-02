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
  background: darkgrey;
  padding: 1em;
  display: grid;
  grid-template-columns: 9% 10% 11.57% 11.57% 11.57% 11.57% 11.57% 11.57% 11.57%;
  align-items: center;
`;

export const P = styled.p`
  text-align: center;
  font-weight: 700;
`;
