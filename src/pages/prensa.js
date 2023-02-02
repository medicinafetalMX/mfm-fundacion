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
            <p style={{ "fontWeight": "700" }}>Entrevista Jalisco TV Programa Familia y Salud 24 enero 2023</p>
          </div>
          <div className="circle-bot" />
        </div>
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <video style={{ "maxWidth": "1200px" }} src="https://thumbnails.fuve.app/FUVE%20Intro.mp4" autoplay="" loop controls muted />
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