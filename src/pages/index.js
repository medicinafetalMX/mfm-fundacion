import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/landing/Intro"
import About from "../components/landing/About"
import Institutions from "../components/landing/Institutions";
import HistoryBlock from "../components/landing/History";
import ProceduresBlock from "../components/landing/Procedures";
import Stories from "../components/landing/Stories";
import ContactSection from "../components/landing/contactSection";

import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Intro />
    <About />
    <Institutions />
    <HistoryBlock />
    <ProceduresBlock />
    <Stories />
    <ContactSection />
  </Layout>
)

export default IndexPage
