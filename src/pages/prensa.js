import React, { Fragment } from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import Institutions from "../components/landing/Institutions";
import SupportCard from "../components/SupportCard";
import { PayPalButtons } from "@paypal/react-paypal-js"
import { navigate } from "gatsby"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

const prensa = ({ data }) => {
  const datos = data.apoya.edges;
  const redes = data.redes.edges;
  const convenios = data.convenios.edges

  return (
    <Layout>
      <div className="content-body pregnancy-page">
        <SectionTitle title="Noticias nuevas" />

        <div className="event-card">
          <div className="circle-up" />
          <div className="box">
            <br></br>
            <p style={{ "fontWeight": "700" }}>Entrevista Radio 89.5 La radio TV</p>
          </div>
          <div className="circle-bot" />
        </div>
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <video style={{ "width": "100%" }} src="https://s3.amazonaws.com/fundacionmfm.com/news2.mp4" autoplay="" loop controls muted />
        </div>
        <br></br><br></br>


        <div className="event-card">
          <div className="circle-up" />
          <div className="box">
            <br></br>
            <p style={{ "fontWeight": "700" }}>Entrevista Damas de Casa 19/04/2023</p>
          </div>
          <div className="circle-bot" />
        </div>
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <video style={{ "width": "100%" }} src="https://s3.amazonaws.com/fundacionmfm.com/news1.mp4" autoplay="" loop controls muted />
        </div>
        <br></br><br></br>

        <div className="event-card">
          <div className="circle-up" />
          <div className="box">
            <br></br>
            <p style={{ "fontWeight": "700" }}>Entrevista Jalisco TV Programa Familia y Salud 24 enero 2023</p>
          </div>
          <div className="circle-bot" />
        </div>
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <video style={{ "width": "100%" }} src="https://videospruebamfm.s3.us-east-2.amazonaws.com/fundacionPrensa.mp4" autoplay="" loop controls muted />
        </div>
        <br></br><br></br>
      </div>
      <div className="content-body pregnancy-page">
        <div className="event-card">
          <div className="circle-up" />
          <div className="box">
            <br></br>
            <p style={{ "fontWeight": "700" }}>Entrevista para Noticias del Pueblito </p>
          </div>
          <div className="circle-bot" />
        </div>
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <video style={{ "width": "100%" }} src="https://videospruebamfm.s3.us-east-2.amazonaws.com/fundacionPrensa2.mp4" autoplay="" loop controls muted />
        </div>
        <br></br><br></br>
      </div>
      <div className="content-body pregnancy-page">
        <div className="event-card">
          <div className="circle-up" />
          <div className="box">
            <br></br>
            <p style={{ "fontWeight": "700" }}>Reportaje  Noticias Jalisco TV Febrero 2023</p>
          </div>
          <div className="circle-bot" />
        </div>
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <video style={{ "width": "100%" }} src="https://videospruebamfm.s3.us-east-2.amazonaws.com/Ecografias.mp4" autoplay="" loop controls muted />
        </div>
        <br></br><br></br>
      </div>
    </Layout >
  )
}

export default prensa;

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