import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 32px;
    height: 50vh;
`
const ColorRect = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 128px;
    background-color: ${props => props.theme.palette.background.main};
`

const AboutUsSection = () => {
    return(
        <Section>
            <ColorRect/>
            <StyledContainer maxWidth="md">
            </StyledContainer>
        </Section>
    )   
}

export default AboutUsSection