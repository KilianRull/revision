import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from "@material-ui/core/Container"

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
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 0px;
  text-align: center;
  align-items: top;
  justify-items: center;
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

const Description = styled.h3`
  margin: 0;
`

const StepsSection = () => {
  return (
    <Section>
      <StyledContainer maxWidth="md">
        <h2>Three easy steps</h2>
        <GridWrapper>
          <GridColumn>
            <StepsWrap>
              <Step>1.</Step>
              <Description>Book a free call to explore your idea</Description>
            </StepsWrap>
          </GridColumn>
          <GridColumn>
            <StepsWrap>
              <Step>2.</Step>
              <Description>
                Set the purpose and build a low-fidelity UI
              </Description>
            </StepsWrap>
          </GridColumn>
          <GridColumn>
            <StepsWrap>
              <Step>3.</Step>
              <Description>
                Use feedback to build and validate your MVP
              </Description>
            </StepsWrap>
          </GridColumn>
        </GridWrapper>
      </StyledContainer>
    </Section>
  )
}

export default StepsSection
