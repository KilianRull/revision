import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 32px;
`

const NewsletterSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="md">
                <h3>Get the check list “From Idea to Impact” for free.</h3>
            </StyledContainer>
        </Section>
    )   
}

export default NewsletterSection