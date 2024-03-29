import React, { Fragment } from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import Institutions from "../components/landing/Institutions";
import SupportCard from "../components/SupportCard";
import dif from "../images/dif.png"
import fetalmed from "../images/fetalmed.png"
import ceme from "../images/logo_CemefiAFILIADO.png"
import kimberly from "../images/Kymberly.jpeg"
import premium from "../images/premium.jpeg"
import oxxo from "../images/OXXO.png"
import difQ from "../images/difQ.jpeg"

const SupportPage = ({ data }) => {
  const datos = data.apoya.edges;
  const redes = data.redes.edges;
  const convenios = data.convenios.edges

  return (
    <Layout>
      <SEO title="Cómo apoyar" />
      <div className="content-body support-page">
        <SectionTitle title="Cómo apoyar" />
        <SupportCard />

        <div className="row button-container">
          {datos.map(({ node }, index) => (
            <Fragment key={index}>
              <a className="button button-cta" href={`mailto:donacionesfundacion@medicinafetalmexico.com?Subject=Nueva%20Pregunta`}>Enviar Correo Electrónico</a>
              <a className="button button-cta" href={`tel:${node.telefono}`}>Llamar vía Teléfono</a>
            </Fragment>
          ))}
        </div>
        <br />
        <p>
          No olvides de seguirnos en nuestras redes sociales:
        </p>
        {redes.map(({ node }, index) => (
          <div className="social-media-container" key={index}>
            <a href={`${node.facebook}`}>
              <img src={facebook} alt="Visítanos en Facebook" />
            </a>
            <a href={`${node.instagram}`}>
              <img src={instagram} alt="Visítanos en Instagram" />
            </a>
          </div>
        ))}
        <br/><br/>
        <SectionTitle title="Nuestros Patrocinadores" />
        <div className="images-container">
        <img src={dif}/>
        <img src={fetalmed}/>
        <img src={premium}/>
        <img src={kimberly}/>
        <img src={difQ}/>
        <img src={ceme}/>
        <img src={oxxo}/>
        </div>
      </div>
    </Layout>
  )
}

export default SupportPage;

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