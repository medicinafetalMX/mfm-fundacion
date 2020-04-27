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
import { graphql } from "gatsby"
const IndexPage = ({ data }) => {
  const datos = data.convenios.edges
  const apoya = data.apoya.edges
  return (
    <Layout>
      <SEO title="Home" />

      <Intro />
      <HistoryBlock />

      <About />
      {apoya.map(({ node }, index) => (
        <div key={index}>
          <ContactSection
            description={documentToReactComponents(node.descripcion.json)}
            tel={node.telefono}
            email={node.correo}
          />
        </div>
      ))}
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
