import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import StyledButton from "./button"
import { StylesProvider } from "@material-ui/core";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Navbar = styled.div`
  height: 80px;
  top: 0;
  background-color: ${props => props.theme.palette.background.main};
  width: 100%;
  z-index: 999;

  @media (min-width: 900px) {
    height: 128px;
  }
`
const NavbarWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const Logo = styled.div`
  font-size: 28px;
`
const NavItemWrap = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`
const NavLink = styled.a`
  font-weight: bold;
  margin: 24px;
  cursor: pointer;
`

const Header = () => {

  return(
    <header>
      <Navbar>
        <StylesProvider injectFirst>
        <NavbarWrapper>
          <Logo>re<strong>vision</strong></Logo>
          <NavItemWrap>
            <NavLink onClick={() => scrollTo('#why')}>Why</NavLink>
            <NavLink onClick={() => scrollTo('#how')}>How</NavLink>
            <NavLink onClick={() => scrollTo('#what')}>What</NavLink>
            <NavLink onClick={() => scrollTo('#who')}>Who</NavLink>
            <StyledButton variant="contained" color="primary" href="https://calendly.com/manaen/revision-explore">Get in Touch</StyledButton>
        </NavItemWrap>
      </NavbarWrapper>
      </StylesProvider>
    </Navbar>
  </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
