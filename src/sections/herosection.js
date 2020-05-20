import React from "react"
import styled from "styled-components"
import Section from "../components/section"

const HeroWrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const DisplayFont = styled.h1`
    font-size: 3.75rem;
    max-width: 66%;
`
const Subline = styled.p`
    max-width: 480px;
`

const HeroSection = () => {
    return(
        <Section>
            <HeroWrap>
                <DisplayFont>Validate your business idea and combine impact and profitability.</DisplayFont>
                <Subline>Find out if your idea has the potential for positive impact and a scalable business model.</Subline>
            </HeroWrap>
        </Section>
    )   
}

export default HeroSection