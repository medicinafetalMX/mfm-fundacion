import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProductivityPage = () => {
  return (
    <Layout>
      <SEO title="Productividad" />
      <div className="content-body productivity-page">
        <SectionTitle title="Productividad" />
      </div>
    </Layout>
  )
}

export default ProductivityPage;