import React from "react"
import styled from "styled-components"

const StyledOverline = styled.p`
    text-transform: uppercase;
    font-weight: bold;
`

const Overline = ({children}) => {

    return(
        <StyledOverline>
            {children}
        </StyledOverline>
        
    )   
}

export default Overline