import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 32px;
`

const Subline = styled.p`
    font-size: 32px;
    line-height: 48px;
    margin-top: 32px;
`

const TeaserSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="md">
                <overline>Stop Thinking — Start Building!</overline>
                <Subline>Don’t waste your entrepreneurial potential and make the world a better place with a scalable impact business model.</Subline>
            </StyledContainer>
        </Section>
    )   
}

export default TeaserSection