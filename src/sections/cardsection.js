import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 32px;
    padding-bottom: 32px;
`
const StyledPaper = styled(Paper)`
    padding: 32px;
`
const Caption = styled.p`
    font-size: 16px;
    margin-bottom: 0;
`

const CardSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <StyledPaper elevation={3}>
                            <h3>Build your startup based on your purpose</h3>
                            <Caption>Get people not only to buy what you do but also why you do it.</Caption>
                        </StyledPaper>
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <StyledPaper elevation={3}>
                            <h3>Create a prototype in just a week</h3>
                            <Caption>Get people not only to buy what you do but also why you do it.</Caption>
                        </StyledPaper>
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <StyledPaper elevation={3}>
                            <h3>Grow your business with performance marketing</h3>
                            <Caption>Get people not only to buy what you do but also why you do it.</Caption>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </StyledContainer>
        </Section>
    )   
}

export default CardSection