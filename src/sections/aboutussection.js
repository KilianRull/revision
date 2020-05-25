import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import {StylesProvider} from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    position: relative;
    overflow: hidden;

    @media (min-width: 900px) {
      padding-top: 96px;
    }
`
const ColorRect = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40%;
    max-height: 128px;
    background-color: ${props => props.theme.palette.background.main};
`
const StyledImg = styled(Img)`
    width: 100%;
    margin: 0 auto;
    transform: scale(1.2);
    margin-top: 48px;

    @media (min-width: 900px) {
        transform: scale(1);
    }
`

const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "team.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid}/>
  }

const Headline2 = styled.h2`
  margin-top: 32px;
`

const AboutUsSection = () => {
    return(
        <Section>
            <StylesProvider injectFirst>
            <ColorRect/>
            <StyledContainer maxWidth="lg">
                <overline>Who we are</overline>
                <Headline2>We are here to help</Headline2>
                <p>We love to build and test impact ideas, especially as impact business models. We focus on impact rather the reputation. This is why we do not lose time with certifications and have build a service to help you test and validate your impact idea as quickly as possible for as little money as possible.</p>
                <Image/>
            </StyledContainer>
        </StylesProvider>
        </Section>
    )   
}

export default AboutUsSection