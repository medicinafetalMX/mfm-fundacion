import React from "react"
import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryHeader from "../components/primaryHeader"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const SocialLaborPage = ({ data }) => {
  const datos = data.labor.edges
  const oferta = data.oferta.edges
  const veinte = data.semanaVeinte.edges
  const trimestre = data.trimestre.edges
  return (
    <Layout>
      <SEO title="Labor Social" />
      <div className="content-body social-labor-page">
        <SectionTitle title="Labor Social" />
        <div className="hero-image">
          {datos.map(({ node }, index) => (
            <img
              key={index}
              src={node.head.file.url}
              alt="Fotografía de Curso MFM"
            />
          ))}
        </div>
        {datos.map(({ node }, index) => (
          <div key={index}>{documentToReactComponents(node.content.json)}</div>
        ))}
        <br />
        <SectionTitle title="Lo que ofrecemos" />

        <PrimaryHeader title="11-14 semanas de gestacion" />
        <div className="offer-container">
          {oferta.map(({ node }, index) => (
            <div key={index} className="offer">
              <div className="image">
                <img src={node.image.file.url} alt="" />
              </div>
              <div className="text-cover">
                {documentToReactComponents(node.description.json)}
              </div>
              <div className="title">{node.name}</div>
            </div>
          ))}
        </div>

        <PrimaryHeader title="20 semanas de gestación" />
        <div className="offer-container">
          {veinte.map(({ node }, index) => (
            <div key={index} className="offer">
              <div className="image">
                <img src={node.imagen.file.url} alt="" />
              </div>
              <div className="text-cover">
                {documentToReactComponents(node.descripcion.json)}
              </div>
              <div className="title">{node.titulo}</div>
            </div>
          ))}
        </div>

        <PrimaryHeader title="Tercer trimestre" />
        <div className="offer-container">
          {trimestre.map(({ node }, index) => (
            <div key={index} className="offer">
              <div className="image">
                <img src={node.imagen.file.url} alt="" />
              </div>
              <div className="text-cover">
                {node.descripcion !== null &&
                  documentToReactComponents(node.descripcion.json)}
              </div>
              <div className="title">{node.titulo}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SocialLaborPage

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
    oferta: allContentful1114SemanasDeGestacion {
      edges {
        node {
          name
          description {
            json
          }
          image {
            file {
              url
            }
          }
        }
      }
    }

    semanaVeinte: allContentful20SemanasDeGestacion {
      edges {
        node {
          titulo
          imagen {
            file {
              url
            }
          }
          descripcion {
            json
          }
        }
      }
    }

    trimestre: allContentful3Trimestre {
      edges {
        node {
          titulo
          imagen {
            file {
              url
            }
          }
          descripcion {
            json
          }
        }
      }
    }
  }
`
