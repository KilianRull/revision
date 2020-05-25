import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import StyledButton from "../components/button";
import {StylesProvider} from '@material-ui/core/styles';

const StyledContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 64px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 900px) {
    padding-top: 128px;
    padding-bottom: 128px;
  }
`
const TextWrap = styled.div`
  @media (min-width: 900px) {
    width: 50%;
  }
`

const StyledImg = styled(Img)`
  height: 320px;

  @media (min-width: 900px) {
    position: absolute !important;
    object-fit: cover;
    width: 40%;
    height: 100%;
  }
`

const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "desert1.jpeg" }) {
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


const TextImageSection = () => {
    return(
        <Section>  
          <StylesProvider>
            <Image/>
            <StyledContainer maxWidth="lg">
                <TextWrap>
                  <h2>We can help you find out if your idea sucks (or not).</h2>
                  <p>No one can tell you if your idea will succeed. Only the market can. We use the lean startup approach and our experiences to help you gather data so that you know if your idea works.</p>
                  <StyledButton variant="contained" color="primary">Erfahre Mehr</StyledButton>
                </TextWrap>
            </StyledContainer>
          </StylesProvider>
        </Section>

    )   
}

export default TextImageSection