import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import Icon from "../components/icon";

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
    text-align: left;
    padding: 16px 32px;

    @media (min-width: 900px) {
        grid-column-end: span 4;
    }
`
const TextIconWrap = styled.div`
    display: flex;

`
const StyledIcon = styled(Icon)`
    margin-right: 16px;
`
const StyledList = styled.ul`
    margin-left: 2rem;

    & li {
        padding-left: 1rem;
    }
`

const FactsSection = () => {
    return(
        <Section color="light">
            <StyledContainer maxWidth="lg">
                <overline>How we approach ideas</overline>
                <GridWrapper>
                    <GridColumn>
                        <TextIconWrap>
                            <StyledIcon name="contacts" width="48px" height="48px"/>
                            <h3>It all starts with who you are</h3>
                        </TextIconWrap>
                        <StyledList>
                            <li>
                                If you want to make something big you need to know how to maintain a high motivation in the long run.
                            </li>
                            <li>
                                Find out how our coaching lays the foundation for long-term success. More...
                            </li>
                        </StyledList>
                    </GridColumn>
                    <GridColumn>
                        <TextIconWrap>
                            <StyledIcon name="survey" width="48px" height="48px"/>
                            <h3>Build and test quickly</h3>
                        </TextIconWrap>
                        <StyledList>
                            <li>
                                Too many founders and business owners over-engineer: The build a fancy product with a lot of time and money that nobody wants.
                            </li>
                            <li>
                                Learn how to prioritise data over “gut feelings” and make sound decisions. More...
                            </li>
                        </StyledList>
                    </GridColumn>
                    <GridColumn>
                        <TextIconWrap>
                            <StyledIcon name="impact" width="48px" height="48px"/>
                            <h3>Have an impact from day one </h3>
                        </TextIconWrap>
                        <StyledList>
                            <li>
                                If you want to have a positive impact you have to be intentional  from day one.  And you can do so without jeopardising profits.
                            </li>
                            <li>
                                See how easy it can be to grow impact and profits without green-washing. More...
                            </li>
                        </StyledList>
                    </GridColumn>
                </GridWrapper>

            </StyledContainer>
        </Section>
    )   
}

export default FactsSection