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
import MobileNavigation from "../components/mobilenav"


const IndexPage = () => (
  <Layout>
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
    <MobileNavigation/>
  </Layout>
)

export default IndexPage
