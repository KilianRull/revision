import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: auto;

    background-color: ${props => props.backgroundColor ? props.theme.palette.background.main : 'transparent'};
`

const Section = ({ children, backgroundColor = false }) => {
    return(
        <Wrapper backgroundColor={backgroundColor}>
            {children}
        </Wrapper>
    )   
}

export default Section