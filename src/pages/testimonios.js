import React from "react"
import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PrimaryHeader from "../components/primaryHeader"
import VideoFrame from "../components/VideoFrame"
const NeuroPage = ({ data }) => {
  const datos = data.neuro.edges

  return (
    <Layout>
      <SEO title="Testimonios" />
      <div className="content-body neuro-page">
        <SectionTitle title="Testimonios" />

        {datos.map(({ node }, index) => (
          <div key={index}>
            <PrimaryHeader title={node.titulo} />
            <div>{documentToReactComponents(node.descripcion.json)}</div>
            <VideoFrame url={node.url} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default NeuroPage

export const query = graphql`
  {
    neuro: allContentfulTestimonios {
      edges {
        node {
          titulo
          descripcion {
            json
          }
          url
        }
      }
    }
  }
`
