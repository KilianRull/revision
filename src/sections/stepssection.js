import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 64px;
`

const StepsWrap = styled.div`
    margin-top: 48px;
`
const Step = styled.h3`
    width: 48px;
    height: 48px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    background-color: ${props => props.theme.palette.primary.main};
    color: white;
`


const StepsSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="md">
                <h2>Three easy steps</h2>
                <StepsWrap>
                    <Step>1</Step>
                    <Step>2</Step>
                    <Step>3</Step>
                </StepsWrap>
            </StyledContainer>
        </Section>
    )   
}

export default StepsSection