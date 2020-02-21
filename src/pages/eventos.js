import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const EventsPage = ({ data }) => {
  const datos = data.eventos.edges
  console.log(datos)
  return (
    <Layout>
      <SEO title="Eventos" />
      <div className="content-body events-page">
        <SectionTitle title="Próximos eventos" />
        {datos.map(({ node }, index) => (
          <>
            <h3>{node.titulo}</h3>
            <h4>{node.fecha}</h4>
            <h4>{node.lugar}</h4>
            <>{documentToReactComponents(node.descripcion.json)}</>
            <SectionTitle />
          </>
        ))}
      </div>
    </Layout>
  )
}

export default EventsPage;

export const query = graphql`
  {
    eventos : allContentfulEventos(sort: {order: DESC, fields: contentful_id}) {
      edges {
        node {
          titulo
          fecha
          lugar
          descripcion {
            json
          }
        }
      }
    }
  }
`