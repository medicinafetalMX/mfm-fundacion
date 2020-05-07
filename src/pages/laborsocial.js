import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PrimaryHeader from "../components/primaryHeader";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SocialLaborPage = ({ data }) => {
  const datos = data.labor.edges;
  const oferta = data.oferta.edges;

  return (
    <Layout>
      <SEO title="Labor Social" />
      <div className="content-body social-labor-page">
        <SectionTitle title="Labor Social" />
        <div className="hero-image">
          {datos.map(({ node }, index) => (
            <img key={index} src={node.head.file.url} alt="Fotografía de Curso MFM" />
          ))}
        </div>
        {datos.map(({ node }, index) => (
          <div key={index}>
            {documentToReactComponents(node.content.json)}
          </div>
        ))}
        <br />
        <PrimaryHeader title="Lo que ofrecemos" />

        <div className="offer-container">
          {oferta.map(({ node }, index) => (
            <div key={index} className="offer">
              <div className="image">
                <img src={node.image.file.url} alt=""/>
              </div>
              <div className="title">
                {node.name}
              </div>
            </div>
          ))}
        </div>
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
    oferta: allContentfulOfertaLaborSocial {
      edges {
        node {
          name
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`