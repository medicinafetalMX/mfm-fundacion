import React from "react"
import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const PregnancyPage = ({ data: { articles } }) => {
  const articlesList = articles.edges
  return (
    <Layout>
      <SEO title="Mi Embarazo" />
      <div className="content-body pregnancy-page">
        <SectionTitle title="Mi Embarazo" />

        {articlesList.map(({ node: article }, index) => (
          <div key={index} className="row">
            <img src={article.picture.file.url} alt={article.title} />
            <div className="content">
              <p>{article.description}</p>
              <br />
              <a
                href={article.url}
                target="_blank"
                className="button button-cta"
              >
                Ver los artículos
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PregnancyPage

export const query = graphql`
  {
    articles: allContentfulArticles {
      edges {
        node {
          id
          slug
          title
          url
          description
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
