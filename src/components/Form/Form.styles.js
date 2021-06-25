import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
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

export const Dropdown = styled.ul`
  display: ${(props) => (props.showDropdown ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 4em;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  border: solid ${(props) => props.theme.accent2};
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.accent};
  text-align: center;
  padding: 0.5em 1em;
  cursor: pointer;
`;

//sorta have the dropdown working; need it to stay when mouse is inside of it, and disappear when mouse is off of it
//mouse in search = display
//mouse in dropdown = display
//mouse off search and display = don't display
