import React from 'react';
import {
  Nav,
  Wrapper,
  Form,
  Links,
  StyledLink,
  SearchInput,
} from './Nav.styles';

const NavBar = () => {
  return (
    <Nav>
      <Wrapper>
        <Links>
          <StyledLink>Home</StyledLink>
          <StyledLink>Portofolio</StyledLink>
        </Links>
        <Form>
          <SearchInput placeholder="Search" />
        </Form>
      </Wrapper>
    </Nav>
  );
};

export default NavBar;
