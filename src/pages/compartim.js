import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const CompartimPage = () => {
  return (
    <Layout>
      <SEO title="Proyecto Compartim" />
      <div className="content-body compartim-page">
        <SectionTitle title="Proyecto Compartim" />
      </div>
    </Layout>
  )
}

export default CompartimPage;