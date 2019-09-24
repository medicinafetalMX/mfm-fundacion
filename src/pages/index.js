import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/landing/Intro";
import About from "../components/landing/About";
import HistoryBlock from "../components/landing/History";
import ContactSection from "../components/landing/ContactSection";

import "../styles/main.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Intro />
    <HistoryBlock />
    <About />
    <ContactSection />
  </Layout>
)

export default IndexPage
