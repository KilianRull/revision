import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Overline from "../components/overline";

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 64px;

    @media (min-width: 900px) {
        padding-top: 128px;
        padding-bottom: 128px;
    }
`
const PricingWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 48px;

    @media (min-width: 900px) {
        flex-direction: row;
        margin-top: 80px;
    }
`
const PricingCard = styled(Paper)`
    padding: 32px;
    padding-top: 48px;
    transform: ${props => props.iselevated ? 'scale(1.05)' : 'scale(1)'};
    z-index: ${props => props.iselevated ? '999' : '1'};
    max-width: 400px;
    margin: 0 auto;

    @media (min-width: 900px) {
        width: 33%;
    }
`
const StyledList = styled.ul`
    list-style-position: inside;
    padding: 0 24px;
    margin-left: 0;

    & li {
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 20px;
    }
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
                <Overline>What you get</Overline>
                <h2>Our Pricing.</h2>
                <PricingWrap>
                    <PricingCard elevation={3}>
                        <h3>1 Day Sprint</h3>
                        <p>Find what makes your business unusual and impactful with real data.</p>
                        <StyledList>
                            <li>Why Statement</li>
                            <li>Vision, Mission Statement</li>
                            <li>Impact Model</li>
                            <li>Sucess Factors</li>
                            <li>Idea / Elevator Pitch</li>
                            <li>Idea Sketching</li>
                            <li>Landingpage Building</li>
                        </StyledList>
                        <PriceOld>3.990,00€</PriceOld>
                        <Price>1.490,00€</Price>
                        <Caption>(excl. USt)</Caption>
                    </PricingCard>
                    <PricingCard iselevated="true" elevation={6}>
                        <h3>4 Day Sprint</h3>
                        <p>Lay out the organisational foundation and build a UX/UI prototype</p>
                        <StyledList>
                            <li>Strategy and OKRs</li>
                            <li>Customer Research</li>
                            <li>Storyboard</li>
                            <li>High-fidelity prototype</li>
                            <li>User testing</li>
                            <li>Wrap-up & Decision</li>
                            <li>Landingpage Building</li>
                        </StyledList>
                        <PriceOld>9.990,00€</PriceOld>
                        <Price>4.490,00€</Price>
                        <Caption>(excl. USt)</Caption>
                    </PricingCard>
                    <PricingCard elevation={3}>
                        <h3>Long Term</h3>
                        <p>Consider us part time Co-Founders. We will help scale your business and grow.</p>
                        <StyledList>
                            <li>Software Development</li>
                            <li>Legal and Data Privacy</li>
                            <li>Processess</li>
                            <li>Organisational structure</li>
                            <li>Growth</li>
                            <li>Everything else you need to grow and have impact</li>
                        </StyledList>
                        <Price>Get in touch</Price>
                    </PricingCard>
                </PricingWrap>
            </StyledContainer>
        </Section>
    )   
}

export default PricingSection