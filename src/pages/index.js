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
const IndexPage = ({ data }) => {
  const datos = data.convenios.edges
  const apoya = data.apoya.edges
  return (
    <Layout>
      <SEO title="Inicio" />

      <Intro />
      <HistoryBlock />

      <About />
      <div className="content-body support-page">
        <SectionTitle title="Ayúdanos a apoyar" />
        <SupportCard />
        <br/>

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
