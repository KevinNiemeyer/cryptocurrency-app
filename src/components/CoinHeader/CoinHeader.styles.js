import styled from 'styled-components';

export const Block = styled.div`
  color: inherit;
  padding: 0.3em;
  border-radius: 2px;
  display: grid;
  align-items: center;
  grid-template-columns: 25% 37.5% 37.5%;
  border: solid #15261cff 1px;
  font-size: ${(props) => props.size};
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
