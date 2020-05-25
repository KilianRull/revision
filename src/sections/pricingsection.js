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

    @media (min-width: 900px) {
        flex-direction: row;
    }
`
const PricingCard = styled(Paper)`
    padding: 32px;
    padding-top: 48px;
    margin-bottom: 24px;

    @media (min-width: 900px) {
        width: 33%;
        margin: 16px;
    }
`
const StyledList = styled.ul`
    text-align: left;
`
const StyledListItem = styled.li`
    margin-bottom: 8px;
`
const Price = styled.p`
    font-size: 28px;
    margin-bottom: 0;
`
const PriceOld = styled(Price)`
    font-size: 20px;
    text-decoration: line-through;
    margin-bottom: 0;
`
const Caption = styled.p`
    font-size: 14px;
    line-height: 20px;
    padding:0 24px;
    opacity: 0.66;
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
                        <StyledList>
                            <StyledListItem>Why Statement</StyledListItem>
                            <StyledListItem>Vision, Mission Statement</StyledListItem>
                            <StyledListItem>Impact Model</StyledListItem>
                            <StyledListItem>Sucess Factors</StyledListItem>
                            <StyledListItem>Idea / Elevator Pitch</StyledListItem>
                            <StyledListItem>Idea Sketching</StyledListItem>
                            <StyledListItem>Landingpage Building</StyledListItem>
                        </StyledList>
                        <PriceOld>3.990,00€</PriceOld>
                        <Price>1.490,00€</Price>
                        <Caption>(excl. USt)</Caption>
                    </PricingCard>
                    <PricingCard elevation={6}>
                        <h3>4 Day Sprint</h3>
                        <p>Lay out the organisational foundation and build a UX/UI prototype</p>
                        <StyledList>
                            <StyledListItem>Strategy and OKRs</StyledListItem>
                            <StyledListItem>Customer Research</StyledListItem>
                            <StyledListItem>Storyboard</StyledListItem>
                            <StyledListItem>High-fidelity prototype</StyledListItem>
                            <StyledListItem>User testing</StyledListItem>
                            <StyledListItem>Wrap-up & Decision</StyledListItem>
                            <StyledListItem>Landingpage Building</StyledListItem>
                        </StyledList>
                        <PriceOld>9.990,00€</PriceOld>
                        <Price>4.490,00€</Price>
                        <Caption>(excl. USt)</Caption>
                    </PricingCard>
                    <PricingCard elevation={3}>
                        <h3>Long Term</h3>
                        <p>Consider us part time Co-Founders. We will help scale your business.</p>
                        <StyledList>
                            <StyledListItem>Software Development</StyledListItem>
                            <StyledListItem>Legal and Data Privacy</StyledListItem>
                            <StyledListItem>Processess</StyledListItem>
                            <StyledListItem>Organisational structure</StyledListItem>
                            <StyledListItem>Growth</StyledListItem>
                            <StyledListItem>Everything else you need to grow and have impact</StyledListItem>
                        </StyledList>
                        <Price>Get in touch</Price>
                    </PricingCard>
                </PricingWrap>
            </StyledContainer>
        </Section>
    )   
}

export default PricingSection