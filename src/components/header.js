import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import StyledButton from "./button"

const Navbar = styled.div`
  height: 128px;
  top: 0;
  background-color: ${props => props.theme.palette.background.main};
  width: 100%;
  z-index: 999;
`
const NavbarWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const NavItemWrap = styled.div`

`
const NavItem = styled.a`
  font-weight: bold;
  margin: 0 24px;
`

const Header = () => (
  <header>
    <Navbar>
      <NavbarWrapper>
        revision
        <NavItemWrap>
          <NavItem>Why</NavItem>
          <NavItem>How</NavItem>
          <NavItem>What</NavItem>
          <NavItem>Who</NavItem>
          <StyledButton variant="contained" color="primary">Get in Touch</StyledButton>
        </NavItemWrap>
      </NavbarWrapper>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
