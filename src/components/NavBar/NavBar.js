import React from 'react';
import Form from 'components/Form';

import { Nav, Wrapper, Links, StyledLink, Logo } from './Nav.styles';

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
        <Form />
      </Wrapper>
    </Nav>
  );
};

export default NavBar;
