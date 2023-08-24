import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"

import calendar from "../images/calendar.svg"
import location from "../images/location.svg"
import ultrasound from "../images/UltrasonidoGratuito.jpg"
import cardiopatia from "../images/cardiopatia.jpeg"
import redondeo from "../images/redondeo.jpeg"

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
              <h4>Marzo 2023</h4>
            </div>
            <div className="line">
              <img src={location} alt="" />
              <h4>OXXO</h4>
            </div>
            <>
            De enero a marzo de 2023 cada redondeo que hagas en tiendas Oxxo de Zapopan ayudarás con la compra de materiales e insumos médicos necesarios en las 
            cirugías fetales y terapias neonatales. Tu aportación ayuda a mamás y bebés en vida fetal
            </>
            <div className="card-img">
              <br></br>
              <img src={redondeo} />
            </div>
          </div>
          <div className="circle-bot" />
        </div>
        <div className="event-card">
          <div className="circle-up" />
          <div className="box">
            <h3></h3>
            <div className="line">
              <img src={calendar} alt="" />
              <h4>Febrero 2023</h4>
            </div>
            <div className="line">
              <img src={location} alt="" />
              <h4>Fundación Medicina Fetal</h4>
            </div>
            <>
              En conmemoración del día mundial de las cardiopatías congénitas la Fundación Medicina Fetal México te invita a escuchar el corazón de tu bebe.
              Durante todo el mes de febrero agenda tu cita y escucha el #CORAZÓNDETUBEBÉ
              Nuestra misión es hacer que disfrutes con tranquilidad el milagro de dar vida

            </>
            <div className="card-img">
              <br></br>
              <img src={cardiopatia} />
            </div>
          </div>
          <div className="circle-bot" />
        </div>

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
