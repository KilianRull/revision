import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import StyledButton from "../components/button"
import Container from '@material-ui/core/Container';
import {StylesProvider} from '@material-ui/core/styles';

const StyledContainer = styled(Container)`
    min-height: calc(100vh - 160px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 96px;
    max-width: 1440px;
`

const DisplayFont = styled.h1`
    @media (min-width: 900px) {
        font-size: 4rem;
        max-width: 960px;
    }
`
const Subline = styled.p`
    max-width: 480px;
`

const HeroSection = () => {
    
    function handleClick(e) {
          e.preventDefault();
          console.log('Yay!')
          //Calendly.initPopupWidget({url: 'https://calendly.com/wohnzimmersport-mit-jana/1?primary_color=22595c'});
        };

    return(
        <Section color="light">
            <StylesProvider injectFirst>
            <StyledContainer>
                <DisplayFont>Validate your business idea and combine impact and profitability.</DisplayFont>
                <Subline>Find out if your idea has the potential for positive impact and a scalable business model.</Subline>
                <StyledButton variant="contained" color="primary" onClick={handleClick}>Schedule Free Call</StyledButton>
            </StyledContainer>
            </StylesProvider>
        </Section>
        
    )   
}

export default HeroSection