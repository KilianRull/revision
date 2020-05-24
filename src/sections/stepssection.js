import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import StyledButton from "../components/button";

const StyledContainer = styled(Container)`
  text-align: center;
  padding-top: 64px;
  padding-bottom: 64px;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 24px;
  margin-top: 48px;
`

const GridColumn = styled.div`
  grid-column-end: span 12;
  align-items: center;
  justify-items: center;
  padding: 16px 32px;

  @media (min-width: 900px) {
    grid-column-end: span 4;
  }
`

const StepsWrap = styled.div`
    margin-top: 48px;
    width: 100%;
`
const ProgressBar = styled.ul`
    counter-reset: step;
    margin-left: 64px;

    & li {
        list-style-type: none;
        position:relative;
        text-align: left;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        padding: 16px 0;
        display: block;
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
    }
    & li:first-child:after {
        content:none;
    }
`

const Description = styled.h3`
  margin: 0;
`


const StepsSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="md">
                <h2>Three easy steps</h2>
                <StepsWrap>
                    <ProgressBar>
                        <li>Book a free call to explore the idea.</li>
                        <li>Set the purpose and build a low-fidelity UI.</li>
                        <li>Use feedback to build and validate an MVP.</li>
                    </ProgressBar>
                </StepsWrap>
                <StyledButton variant="contained" color="primary">Start Now</StyledButton>
            </StyledContainer>
        </Section>
    )   
}

export default StepsSection
