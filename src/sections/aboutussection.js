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
`
const ColorRect = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40%;
    background-color: ${props => props.theme.palette.background.main};
`
const StyledImg = styled(Img)`
    width: 100%;
    margin: 0 auto;
    transform: scale(1.2);

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

const AboutUsSection = () => {
    return(
        <Section>
            <StylesProvider injectFirst>
            <ColorRect/>
            <StyledContainer maxWidth="lg">
                <Image/>
            </StyledContainer>
        </StylesProvider>
        </Section>
    )   
}

export default AboutUsSection