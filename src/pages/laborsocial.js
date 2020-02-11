import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PrimaryHeader from "../components/primaryHeader";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SocialLaborPage = ({ data }) => {
  const datos = data.labor.edges;

  return (
    <Layout>
      <SEO title="Labor Social" />
      <div className="content-body social-labor-page">
        <SectionTitle title="Labor Social" />
        <div className="hero-image">
          {datos.map(({ node }) => (
            <img src={node.head.file.url} alt="Fotografía de Curso MFM" />
          ))}
        </div>
        {datos.map(({ node }) => (
          <p>
            {documentToReactComponents(node.content.json)}
          </p>
        ))}
        <br />
        <PrimaryHeader title="Lo que ofrecemos" />
        {datos.map(({ node }) => (
          <div>
            {documentToReactComponents(node.lista.json)}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SocialLaborPage;

export const query = graphql`
  {
    labor: allContentfulLaborsocial {
      edges {
        node {
          content {
            json
          }
          head {
            file {
              url
            }
          }
          lista {
            json
          }
        }
      }
    }
  }
`