import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 1440px;
    margin: 0 auto;
    padding: 24px;
`

const Section = ({ children }) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )   
}

export default Section