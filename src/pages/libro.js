import React, { Fragment } from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import Institutions from "../components/landing/Institutions";
import SupportCard from "../components/SupportCard";

const libro = ({ data }) => {
  const datos = data.apoya.edges;
  const redes = data.redes.edges;
  const convenios = data.convenios.edges

  return (
    <Layout>
      <SEO title="Compra de libro" />
      <div className="content-body support-page">
        <SectionTitle title="Comprar libro" />
        <SupportCard amount={"$2000 MXN"}/>
        <div className="row button-container">
          {datos.map(({ node }, index) => (
            <Fragment key={index}>
              <a className="button button-cta" href={`mailto:${node.correo}?Subject=Nueva%20Pregunta`}>Enviar Correo Electrónico</a>
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
          {convenios.map(({ node }, index) => (
            <div key={index}>
              <Institutions
                image={node.imagen.file.url}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default libro;

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