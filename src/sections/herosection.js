import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import StyledButton from "../components/button"
import Container from '@material-ui/core/Container';
import {StylesProvider} from '@material-ui/core/styles';

const StyledContainer = styled(Container)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 128px;
    padding-bottom: 128px;
    max-width: 1440px;
`

const DisplayFont = styled.h1`

`
const Subline = styled.p`
    max-width: 480px;
`

const HeroSection = () => {
    return(  
        <Section color="light">
            <StylesProvider injectFirst>
            <StyledContainer>
                <DisplayFont>Validate your business idea and combine impact and profitability.</DisplayFont>
                <Subline>Find out if your idea has the potential for positive impact and a scalable business model.</Subline>
                <StyledButton variant="contained" color="primary">Schedule Free Call</StyledButton>
            </StyledContainer>
            </StylesProvider>
        </Section>
        
    )   
}

export default HeroSection