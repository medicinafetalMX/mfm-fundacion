import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"

import calendar from "../images/calendar.svg"
import location from "../images/location.svg"
import ultrasound from "../images/UltrasonidoGratuito.jpg"

const EventsPage = ({ data }) => {
  const datos = data.eventos.edges
  console.log(datos)
  return (
    <Layout>
      <SEO title="Eventos" />
      <div className="content-body events-page">
        <SectionTitle title="Próximos eventos" />
        <div className="event-card">
          <div className="circle-up" />
          <div className="box">
            <h3></h3>
            <div className="line">
              <img src={calendar} alt="" />
              <h4>26 enero 2023</h4>
            </div>
            <div className="line">
              <img src={location} alt="" />
              <h4>Krystal Grand Nuevo Vallarta, Nuevo Vallarta, Nayarit</h4>
            </div>
            <>
              Agenda tu cita
              442 168 7879
            </>
            <div className="card-img">
              <br></br>
              <img src={ultrasound} />
            </div>
          </div>
          <div className="circle-bot" />
        </div>

        {datos.map(({ node }, index) => (
          <div className="event-card">
            <div className="circle-up" />
            <div className="box">
              <h3>{node.titulo}</h3>
              <div className="line">
                <img src={calendar} alt="" />
                <h4>{node.fecha}</h4>
              </div>
              <div className="line">
                <img src={location} alt="" />
                <h4>{node.lugar}</h4>
              </div>
              <>{documentToReactComponents(node.descripcion.json)}</>
              <div className="card-img">
                <img src={node?.imagen?.file?.url} />
              </div>
            </div>
            <div className="circle-bot" />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default EventsPage

export const query = graphql`
  {
    eventos: allContentfulEventos {
      edges {
        node {
          titulo
          fecha
          lugar
          descripcion {
            json
          }
          imagen {
            file {
              url
            }
          }
        }
      }
    }
  }
`
