import React from 'react';

import {
  Nav,
  Wrapper,
  Form,
  Links,
  StyledLink,
  SearchInput,
  Logo,
} from './Nav.styles';

import logo from '../../images/Applicoin.png';
const NavBar = () => {
  return (
    <Nav>
      <Wrapper>
        <Links>
          <StyledLink></StyledLink>
          <StyledLink>Home</StyledLink>
          <StyledLink>Portofolio</StyledLink>
        </Links>
        <Logo src={logo} alt="logo" />
        <Form>
          <SearchInput placeholder="Search" />
        </Form>
      </Wrapper>
    </Nav>
  );
};

export default NavBar;
