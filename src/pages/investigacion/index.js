import React from "react"
import SectionTitle from "../../components/SectionTitle"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DoctorCard from "../../components/DoctorCard"

import { graphql } from "gatsby"

const InvestigationPage = ({ data }) => {
  const researchers = data.doctors.edges

  return (
    <Layout>
      <SEO title="Investigación" />
      <div className="content-body investigation-page">
        <SectionTitle title="Investigación" />
        <p>
          Una de nuestros objetos sociales es realizar investigación, lo cual
          nos permite estar a la vanguardia en los temas de medicina fetal, así
          como apoyar a nuestros médicos investigadores a crear conocimiento
          nuevo.
        </p>
        <p>Conoce a nuestros Investigadores:</p>

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
  }
`
