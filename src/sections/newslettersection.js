import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import MailChimpForm from "../components/form";

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 64px;
`
const Headline2 = styled.h2`
    padding: 0 24px;
`
const FormWrap = styled.div`
    margin-bottom: 48px;
    margin-top: 48px;
    padding: 0 24px;
`

const NewsletterSection = () => {
    return(
        <Section color="dark">
            <StyledContainer maxWidth="md">
                <Headline2>Get the check list “From Idea to Impact” for free.</Headline2>
                <FormWrap>
                    <MailChimpForm/>
                </FormWrap>
            </StyledContainer>
        </Section>
    )   
}

export default NewsletterSection