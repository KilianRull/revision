import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Navbar = styled.div`
  height: 80px;
  background-color: ${props => props.theme.palette.primary.main};
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Header = () => (
  <header>
    <Navbar>
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
