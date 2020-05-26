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
import {Helmet} from "react-helmet";

const TestSection = styled.div`
  height: 30vh;
  width: 100%;
  background-color: ${props => props.theme.palette.primary.main};
`

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
    </Helmet>
    <SEO title="Home" />
    <HeroSection/>
    <div id="why"/>
    <TeaserSection />
    <CardSection/>
    <div id="how"/>
    <StepsSection />
    <TextImageSection/>
    <div id="what"/>
    <PricingSection />
    <FactsSection/>
    <NewsletterSection/>
    <div id="who"/>
    <AboutUsSection />

    <TestSection></TestSection>
  </Layout>
)

export default IndexPage
