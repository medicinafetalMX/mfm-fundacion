import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import logo from "../images/mfmflogo.png";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const AboutPage = ({ data }) => {
  const about = data.content.edges
  return (
    < Layout >
      <SEO title="Conócenos" />
      <div className="content-body about-page">
        {about.map(({ node }, index) => (
          <div key={index}>
            <SectionTitle title="Conócenos" />
            {documentToReactComponents(node.content.json)}
            <SectionTitle title="¿Quiénes somos?" />
            {documentToReactComponents(node.quienesSomos.json)}
            <SectionTitle title="¿Qué ofrecemos?" />
            {documentToReactComponents(node.queOfrecemos.json)}
          </div>
        ))}
        <div className="row">
          <img className="logo" src={logo} alt="Fundación Medicina Fetal México" />
        </div>
      </div>
    </Layout >
  )
}
export default AboutPage;

export const conocenos = graphql`
  {
    content : allContentfulFoundation {
      edges {
        node {
          content {
            json
          }
          queOfrecemos {
            json
          }
          quienesSomos {
            json
          }
        }
      }
    }
  }
`