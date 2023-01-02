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

const libro = ({ data }) => {
  const datos = data.apoya.edges;
  const redes = data.redes.edges;
  const convenios = data.convenios.edges

  return (
    <Layout>
      <PayPalScriptProvider options={{ 'client-id': 'AapUGGBGoyNBt1cGA3gVnCR3_vTvfUhwHpuz1CF3XW_VWuL_u-WMYxemrpITpaknMMtz39cWEskwo35L', 'currency': 'MXN', 'vault': 'true' }}>
        <SEO title="Compra de libro" />
        <div className="content-body support-page">
          <SectionTitle title="Comprar libro" />
          <h3>Opción 1.</h3>
          <PayPalButtons style={{ 'color': 'blue' }}
            className="button button-cta"
            createOrder={(data, actions) => {
              return actions.order.create({
                'purchase_units': [{
                  'amount': {
                    value: "2000"
                  }
                }],
                "application_context": { "brand_name": "Fundación Medicina Fetal México" }
              })
            }}
            onApprove={(data, actions) => {
              navigate("/successPayment")
            }}
          >
          </PayPalButtons>
          <br />
          <div className="line-1">
            <span className="line-2">
              o
            </span>
          </div>
          <br/>
          <h3>Opción 2.</h3>
          <SupportCard amount={"$2000 MXN"} />
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
          <br /><br />
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
      </PayPalScriptProvider>
    </Layout >
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