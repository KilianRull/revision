import React from "react"
import './../fonts/fonts.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import HeroSection from "../sections/herosection"
import TeaserSection from "../sections/teasersection"
import CardSection from "../sections/cardsection"
import TextImageSection from "../sections/textimagesection"
import NewsletterSection from "../sections/newslettersection"
import AboutUsSection from "../sections/aboutussection"
import PricingSection from "../sections/pricingsection"
import FactsSection from "../sections/factssection"
import StepsSection from "../sections/stepssection"

const TestSection = styled.div`
  height: 30vh;
  width: 100%;
  background-color: ${props => props.theme.palette.primary.main};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection/>
    <TeaserSection/>
    <CardSection/>
    <StepsSection/>
    <TextImageSection/>
    <PricingSection/>
    <FactsSection/>
    <NewsletterSection/>
    <AboutUsSection/>

    <TestSection></TestSection>
  </Layout>
)

export default IndexPage
