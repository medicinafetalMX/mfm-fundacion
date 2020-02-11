import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const NeuroPage = ({ data }) => {
  const datos = data.neuro.edges;

  return (
    <Layout>
      <SEO title="Neurodesarrollo" />
      <div className="content-body neuro-page">

        <SectionTitle title="Neurodesarrollo" />
        <div className="hero-image">
          {datos.map(({ node }) => (

            <img src={node.head.file.url} alt="Neurodesarrollo" />

          ))}
        </div>
        {datos.map(({ node }) => (
          <p>
            {documentToReactComponents(node.content.json)}
          </p>
        ))}
        <div className="image-grid">
          <div className="image-container">
            {datos.map(({ node }) => (
              <img src={node.image1.file.url} alt="Neurodesarrollo" />
            ))}
          </div>
          <div className="image-container">
            {datos.map(({ node }) => (
              <img src={node.image2.file.url} alt="Neurodesarrollo" />
            ))}
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default NeuroPage;

export const query = graphql`
  {
    neuro: allContentfulNeurodesarrollo {
      edges {
        node {
          head {
            file {
              url
            }
          }
          image1 {
            file {
              url
            }
          }
          image2 {
            file {
              url
            }
          }
          content {
            json
          }
        }
      }
    }
  }
`