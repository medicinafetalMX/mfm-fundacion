import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import logo from "../images/mfmflogo.png";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const AboutPage = ({ data: { content } }) => {
  const about = documentToReactComponents(content.content.json);
  return (
    < Layout >
      <SEO title="Conócenos" />
      <div className="content-body about-page">
        <SectionTitle title="Conócenos" />

        <p>{about}</p>

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
    content: contentfulFoundation {
      content {
        json
      }
    }
  }
`