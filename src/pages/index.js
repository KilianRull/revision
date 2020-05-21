import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import HeroSection from "../sections/herosection"
import TeaserSection from "../sections/teasersection"
import CardSection from "../sections/cardsection"
import TextImageSection from "../sections/textimagesection"
import NewsletterSection from "../sections/newslettersection"

const TestSection = styled.div`
  height: 30vh;
  width: 100%;
  background-color: ${props => props.theme.palette.primary.main};
`

const IndexPage = () => (
  <Layout>
    <HeroSection>

    </HeroSection>
    <TeaserSection/>
    <CardSection/>
    <TextImageSection/>
    <NewsletterSection/>
    <SEO title="Home" />
    <h2>Testing a little bit</h2>
    <h3>Testing some more</h3>
    <h4>Testing like crazy</h4>
    <h5>This testing is fun</h5>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor </p>
    <blockquote>Testing with a beautiful blockquote. Well damn this is great.</blockquote>

    <TestSection></TestSection>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
