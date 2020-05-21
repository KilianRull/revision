import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import StyledInput from "../components/input";

//this background should ideally be included in the Section component in a way that
//the Section component has 3 different background themes.
const Background = styled.div`
    background-color: ${props => props.theme.palette.primary.main};
    color: white;
`
const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 32px;
`

const NewsletterSection = () => {
    return(
        <Section>
            <Background>
            <StyledContainer maxWidth="md">
                <h3>Get the check list “From Idea to Impact” for free.</h3>
                <StyledInput placeholder="Name"/>
                <StyledInput placeholder="E-Mail"/>
            </StyledContainer>
            </Background>
        </Section>
    )   
}

export default NewsletterSection