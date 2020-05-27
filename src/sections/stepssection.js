import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import StyledButton from "../components/button";
import Overline from "../components/overline";

const StyledContainer = styled(Container)`
  text-align: center;
  padding-top: 64px;
  padding-bottom: 96px;

  @media (min-width: 900px) {
      padding-top: 96px;
      padding-bottom: 160px;
  }
`
const StepsWrap = styled.div`
    margin-top: 48px;
    width: 100%;
`
const ProgressBar = styled.ul`
    counter-reset: step;
    margin-left: 64px;

    @media (min-width: 900px) {
        margin-left: 0;
    }

    & li {
        list-style-type: none;
        position:relative;
        text-align: left;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        padding: 16px 0;
        display: block;

        @media (min-width: 900px) {
            float: left;
            width: 33.33%;
            text-align: center;
            padding: 16px 32px;
            margin-bottom: 64px;
        }
    }
    & li:before {
        /* CSS for creating steper block before the li item*/
        content:counter(step);
        counter-increment: step;
        position: absolute;
        top: 12px;
        left: -56px;
        height:40px;
        width:40px;
        line-height: 40px;
        display:block;
        text-align: center;
        border-radius: 50%;
        background-color: ${props => props.theme.palette.primary.main};
        color: white;

        @media (min-width: 900px) {
            position: relative;
            margin: 0 auto 10px auto;
            top: auto;
            left: auto;
        }
    }
    & li:after {
        /* CSS for creating horizontal line*/
        content:'';
        position: absolute;
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: #1a1a1a;
        left: -38px;
        top: -75%;
        z-index: -1;

        @media (min-width: 900px) {
            width:100%;
            height:2px;
            top: 34px;
            left: -50%;
        }
    }
    & li:first-child:after {
        content:none;
    }
`


const StepsSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="lg">
                <Overline>How it works</Overline>
                <h2>Three easy steps.</h2>
                <StepsWrap>
                    <ProgressBar>
                        <li>Book a free call to explore the idea.</li>
                        <li>Set the purpose and build a low-fidelity UI.</li>
                        <li>Use feedback to build and validate an MVP.</li>
                    </ProgressBar>
                </StepsWrap>
                <StyledButton variant="contained" color="primary" href="https://calendly.com/manaen/revision-explore">Start Now</StyledButton>
            </StyledContainer>
        </Section>
    )   
}

export default StepsSection
