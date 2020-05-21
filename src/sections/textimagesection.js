import React from "react"
import styled from "styled-components"
import Section from "../components/section"
import Container from '@material-ui/core/Container';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledContainer = styled(Container)`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 32px;
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
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }

const TextImageSection = () => {
    return(
        <Section>
            <StyledContainer maxWidth="md">
                <Image/>
                <h2>We can help you find out if your idea sucks (or not).</h2>
            </StyledContainer>
        </Section>
    )   
}

export default TextImageSection