import styled from 'styled-components';

export const StyledHeader = styled.div`
  color: inherit;
  padding: 0.3em;
  border-radius: 2px;
  display: grid;
  align-items: center;
  grid-template-columns: ${(props) =>
    props.big ? '25% 35% 25%' : '25% 37.5% 37.5%'};
  border: solid ${(props) => props.theme.accent2} 1px;
  font-size: ${(props) => (props.big ? '2rem' : '1rem')};
`;

export const Logo = styled.div`
  background-image: url(${(props) => props.image});
  text-align: center;
  width: 2em;
  height: 2em; /* Set height */
  background-size: cover; /* Scaling down large image to a div */
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.5s;
`;

export const Name = styled.p`
  padding-right: 3em;
  color: antiquewhite;
`;
