import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2em;
`;
export const Breadcrumb = styled.div`
  color: white;
  font-size: 1.2rem;
  padding: 0 1em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #77f4d6;
`;

export const DropDownBtn = styled.div`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  content: ${(props) => props.value};
  position: relative;
  font-size: 1rem;
  padding: 0.5em 1rem;
  &::after {
    position: absolute;
    content: '';
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;
//how do I make this div fit to the content inside so the words aren't overlapping?
export const Wrapper = styled.div`
  color: antiquewhite;
  margin-top: 3%;
  width: 30%;
  overflow: auto;
  word-wrap: break-word;
`;
