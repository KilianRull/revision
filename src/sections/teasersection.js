import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import Overline from "../components/overline";

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 32px;

    @media (min-width: 900px) {
        padding-top: 96px;
        padding-bottom: 64px;
    }
`

const Subline = styled.p`
    font-size: 28px;
    line-height: 40px;
    padding: 0 16px;
`

const TeaserSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="md">
                <Overline>Stop Thinking — Start Building!</Overline>
                <Subline>Don’t waste your entrepreneurial potential and make the world a better place with a scalable impact business model.</Subline>
            </StyledContainer>
        </Section>
    )   
}

export default TeaserSection