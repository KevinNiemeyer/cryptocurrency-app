import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LI = styled.li`
  width: 100%;
  margin: 0.5rem auto;
  background: #0d1711;
  color: #77f4d6;
  width: 90%;
  padding: 1em;
  display: grid;
  grid-template-columns: 7% 12% 11.57% 11.57% 11.57% 11.57% 11.57% 11.57% 11.57%;
  align-items: center;
  &:hover .spin {
    transform: rotate3d(0, 1, 0, 360deg);
  }
`;

export const Block = styled.div`
  padding: 0.3em;
  border-radius: 2px;
  display: grid;
  align-items: center;
  grid-template-columns: 25% 37.5% 37.5%;
  border: solid #15261cff 1px;
`;

export const IMG = styled.div`
  background-image: url(${(props) => props.image});
  text-align: center;
  width: 2em;
  height: 2em; /* Set height */
  background-size: cover; /* Scaling down large image to a div */
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.5s;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
