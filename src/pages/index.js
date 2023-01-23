import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/landing/Intro"
import About from "../components/landing/About"
import HistoryBlock from "../components/landing/History"
import ContactSection from "../components/landing/ContactSection"
import Institutions from "../components/landing/Institutions"
import "../styles/main.scss"
import PrimaryHeader from "../components/primaryHeader"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, Link } from "gatsby"
import SupportCard from "../components/SupportCard"
import SectionTitle from "../components/SectionTitle"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import NewEvent from "../components/landing/NewEvent"
const IndexPage = ({ data }) => {
  const datos = data.convenios.edges
  const apoya = data.apoya.edges
  return (
    <Layout>
      <PayPalScriptProvider options={{'client-id': 'AZA3ngQqNfdBlBx8QPDvAx99psfdWvXDPWu0s5M9ixVJDm8d27JY34MiHtw-w5Swl9Vm8X7S9vqsSiyV', 'currency': 'MXN', 'vault': 'true'}}>
        <SEO title="Inicio" />
        <NewEvent/>
        <br></br>
        <Intro />
        <HistoryBlock />

        <About />
        <div className="content-body support-page">
          <SectionTitle title="Ayúdanos a apoyar" />
          <SupportCard />
          <br />

          <Link to="/apoya" className="button button-cta">Contáctanos</Link>
        </div>
        <section className="institutions">
          <div className="content-screen">
            <PrimaryHeader title="Contamos con el respaldo de diversas instituciones" />
            <div className="images-container">
              {datos.map(({ node }, index) => (
                <div key={index}>
                  <Institutions
                    image={node.imagen.file.url}
                    ltText={node.organizacin}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </PayPalScriptProvider>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  {
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
  }
`
