import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import StyledInput from "../components/input";
import StyledButton from "../components/button"

//this background should ideally be included in the Section component in a way that
//the Section component has 3 different background themes.
const Background = styled.div`
    background-color: ${props => props.theme.palette.primary.main};
    color: white;
`
const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 64px;
`
const Headline2 = styled.h2`
    padding: 0 24px;
`
const FormWrap = styled.form`
    margin-bottom: 48px;
    margin-top: 48px;
    padding: 0 24px;
`
const Caption = styled.p`
    font-size: 14px;
    line-height: 20px;
    padding:0 24px;
    margin-top: 32px;
    opacity: 0.66;
`

const NewsletterSection = () => {
    return(
        <Section>
            <Background>
            <StyledContainer maxWidth="md">
                <Headline2>Get the check list “From Idea to Impact” for free.</Headline2>
                <FormWrap>
                    <StyledInput placeholder="Name" fullWidth/>
                    <StyledInput placeholder="E-Mail" fullWidth/>
                </FormWrap>
                <StyledButton variant="contained" color="secondary" >Claim Checklist</StyledButton>
                <Caption>By clicking the above button you agree to our Terms of Service and have read and understood our Privacy Policy.</Caption>
            </StyledContainer>
            </Background>
        </Section>
    )   
}

export default NewsletterSection