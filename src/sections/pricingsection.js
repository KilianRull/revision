import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 64px;
`
const PricingWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 48px;
`
const PricingCard = styled(Paper)`
    padding: 32px;
    margin-bottom: 24px;
`
const Price = styled.p`
    font-size: 28px;
`
const PriceOld = styled(Price)`
    font-size: 20px;
    text-decoration: line-through;
    margin-bottom: 0;
`

const PricingSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="lg">
                <overline>Pricing</overline>
                <PricingWrap>
                    <PricingCard elevation={3}>
                        <h3>1 Day Sprint</h3>
                        <p>Find what makes your business unusual and impactful.</p>
                        <PriceOld>3.990,00€</PriceOld>
                        <Price>1.490,00€</Price>
                    </PricingCard>
                    <PricingCard elevation={6}>
                        <h3>4 Day Sprint</h3>
                        <p>Lay out the organisational foundation and build a UX/UI prototype</p>
                        <PriceOld>9.990,00€</PriceOld>
                        <Price>4.490,00€</Price>
                    </PricingCard>
                    <PricingCard elevation={3}>
                        <h3>Long Term</h3>
                        <p>Consider us part time Co-Founders. We will help scale your business.</p>
                    </PricingCard>
                </PricingWrap>
            </StyledContainer>
        </Section>
    )   
}

export default PricingSection