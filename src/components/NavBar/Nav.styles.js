import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  position: sticky;
  width: 100%;
  height: 5em;
  color: ${(props) => props.theme.secondary2};
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  color: ${(props) => props.theme.secondary2};
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Links = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.secondary2};
  &:first-of-type {
    margin-right: 3em;
  }
  margin-right: 3em;
  &:hover {
    color: ${(props) => props.theme.accent};
  }
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

export const Logo = styled.img`
  margin-bottom: 1.5em;
`;
