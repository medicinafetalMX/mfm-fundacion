import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import Institutions from "../components/landing/Institutions";

const SupportPage = ({ data }) => {
  const datos = data.apoya.edges;
  const redes = data.redes.edges;
  const convenios = data.convenios.edges
  console.log(redes);
  return (
    <Layout>
      <SEO title="Cómo apoyar" />
      <div className="content-body support-page">
        <SectionTitle title="Cómo apoyar" />
        {datos.map(({ node }, index) => (
          <>
            <p key={index}>
              {documentToReactComponents(node.descripcion.json)}
            </p>
            <div className="donations-card">
              <p><b>Nombre de la fundación: </b>{node.nombreFundacion}</p>
              <p><b>Banco: </b>{node.banco}</p>
              <p><b>No. Cuenta: </b>{node.cuenta}</p>
              <p><b>CLABE: </b>{node.clabe}</p>
            </div>
            <p>
              ¡Contáctanos! Escribe un mail a <a className="secondary-link" href={`mailto:${node.correo}?Subject=Nueva%20Pregunta`}>{node.correo}</a> o llámanos al {node.telefono}.
          </p>
          </>
        ))}


        <div className="row button-container">
          {datos.map(({ node }, index) => (
            <>
              <a className="button button-cta" href={`mailto:${node.correo}?Subject=Nueva%20Pregunta`}>Enviar Correo Electrónico</a>
              <a className="button button-cta" href={`tel:${node.telefono}`}>Llamar vía Teléfono</a>
            </>
          ))}
        </div>
        <br />
        <p>
          No olvides de seguirnos en nuestras redes sociales:
        </p>
        {redes.map(({ node }) => (
          <div className="social-media-container">
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