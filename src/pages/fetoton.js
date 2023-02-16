import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import calendar from "../images/calendar.svg"
import location from "../images/location.svg"
import fetoton from "../images/fetoton23.jpg"

const Fetoton = () => {
  return (
    <Layout>
      <SEO title="FETOTON" />
      <div className="content-body compartim-page">
        <SectionTitle title="FETOTON 2023" />
        <div className="event-card">
          <img src={fetoton} alt="" />
          <div className="circle-bot" />
        </div>
        <SectionTitle title="FETOTON 2021" />
        <div className="event-card">
          <div className="circle-up" />
          <div className="box">
            <h3></h3>
            <div className="line">
              <img src={calendar} alt="" />
              <h4>15 de Mayo de 2021</h4>
            </div>
            <div className="line">
              <img src={location} alt="" />
              <h4>Ciudad Fernández, San Luis Potosí, México</h4>
            </div>
            <>
              Durante este evento acudimos a comunidades de difícil acceso a centros de salud o a hospitales para brindar atención a mujeres embarazadas de cualquier edad gestacional
              realizando ultrasonidos avanzados, también ofrecemos consulta médica y genética ante cualquier diagnóstico de patología, con la finalidad de reducir preeclampsia temprana,
              prematuridad y morbilidad neonatal.
            </>
            <div className="card-img">
              <br></br>
            </div>
          </div>
          <div className="circle-bot" />
        </div>
        <video style={{ "width": "100%" }} src="https://videospruebamfm.s3.us-east-2.amazonaws.com/fetoton.mp4" autoplay="" loop controls muted />
        <br></br><br></br><br></br>
      </div>

    </Layout>
  )
}

export default Fetoton;

export const query = graphql`
  {
    apoya: allContentfulApoya {
      edges {
        node {
          correo
          descripcion {
            json
          }
          telefono
          banco
          clabe
          cuenta
          nombreFundacion
        }
      }
    }
    convenios: allContentfulConvenios {
      edges {
        node {
          imagen {
            file {
              url
            }
          }
          organizacin
        }
      }
    }
    redes: allContentfulRedesSociales {
      edges {
        node {
          facebook
          twitter
          instagram
        }
      }
    }
  }
`