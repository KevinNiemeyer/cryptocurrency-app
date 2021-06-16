import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
    width: 100%;
  margin: 0.5rem auto;
  background: #0d1711;
  color: ${(props) => props.theme.primary1};
  width: 90%;
  padding: 1em;
  display: grid;
  grid-template-columns: 7% 12% 11.57% 11.57% 11.57% 11.57% 11.57% 11.57% 11.57%;
  align-items: center;
  transition: all 0.1s ease-in-out;
  &:hover .spin {
    transform: rotate3d(0, 1, 0, 360deg);
  }
  &:hover {
    background: ${(props) => props.theme.background};
`;
