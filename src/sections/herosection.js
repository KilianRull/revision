import React from "react"
import styled from "styled-components"

const HeroWrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const DisplayFont = styled.h1`
    font-size: 3.75rem;
`

const HeroSection = () => {
    return(
        <HeroWrap>
            <DisplayFont>Validate your business idea and combine impact and profitability.</DisplayFont>
            <p>Find out if your idea has the potential for positive impact and a scalable business model.</p>
        </HeroWrap>
    )   
}

export default HeroSection