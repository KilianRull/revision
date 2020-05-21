import React from "react"
import styled from "styled-components"

const handleColorType = color => {
    switch (color) {
      case "dark":
        return "background: #1a1a1a; color: white;";
      case "light":
        return "color: #1a1a1a; background: #F6F4FB;";
      default:
        return "color: #1a1a1a; background: transparent;";
    }
  };

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    ${({ color }) => handleColorType(color)};
`

const Section = ({ children, color }) => {
    return(
        <Wrapper color={color}>
            {children}
        </Wrapper>
    )   
}

export default Section