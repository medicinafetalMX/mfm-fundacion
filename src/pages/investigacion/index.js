import React from "react"
import SectionTitle from "../../components/SectionTitle"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DoctorCard from "../../components/DoctorCard"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, Link } from "gatsby"

const InvestigationPage = ({ data }) => {
  const researchers = data.doctors.edges
  const articles = data.articles.edges
  return (
    <Layout>
      <SEO title="Investigación" />
      <div className="content-body investigation-page">
        <SectionTitle title="Investigación" />
        <p>
          En Fundación Medicina Fetal México, la investigación es uno de
          nuestros pilares más grandes y de mayor importancia, debido a que
          gracias a nuestra producción científica, los médicos investigadores de
          nuestro grupo son referentes a nivel mundial. Han creado nuevas
          técnicas de tratamiento siendo pioneros en algunas intervenciones
          fetales, demostrando también su empatía con las mujeres embarazadas de
          nuestro país.
        </p>
        <p>
          Día con día ponen todo su empeño en mejorar la medicina fetal de
          México y el mundo, para poder ofrecer más y mejores opciones a
          nuestras pacientes, para que todos los niños lleguen a desarrollar su
          máximo potencial, por un mundo mejor.
        </p>

        <div className="doctors-grid">
          {researchers.map(({ node }, index) => (
            <DoctorCard
              key={index}
              img={node.picture.file.url}
              name={node.name}
              linkTo={`/investigacion/${node.slug}`}
            />
          ))}
        </div>
        <SectionTitle title="Artículos de Investigación" />
        <div className="investigation-articles">
          <ul>
            {articles.map(({ node }, index) => (
              <li key={index}>
                <a href={node.url}>
                  {node.titulo}
                  {". "}
                </a>
                {documentToReactComponents(node.descripcion.json)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
export default InvestigationPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    doctors: allContentfulResearchers(
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          name
          slug
          picture {
            file {
              url
            }
          }
        }
      }
    }
    articles: allContentfulInvestigationArticles {
      edges {
        node {
          titulo
          descripcion {
            json
          }
          url
        }
      }
    }
  }
`
