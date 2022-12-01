import React, { Fragment } from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import Institutions from "../components/landing/Institutions";
import SupportCard from "../components/SupportCard";

const succesPayment = ({ data }) => {
    const datos = data.apoya.edges;
    const redes = data.redes.edges;
    const convenios = data.convenios.edges

    return (
        <Layout>
            <div className="content-body support-page" style={{"marginTop": "120px", "marginBottom": "120px"}}>
                <h2>¡Compra exitosa!.</h2> 
                <h3>Regresa a nuestra <a href="http://fundacionmfm.com.s3-website-us-east-1.amazonaws.com/">página de inicio.</a></h3>
                <div className="row button-container">

                </div>
            </div>
        </Layout>
    )
}
export default succesPayment;

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