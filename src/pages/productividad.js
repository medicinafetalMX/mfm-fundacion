import React from "react"
import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CountUp from "react-countup"
const ProductivityPage = ({ data }) => {
  const stats = data.stats.edges
  console.log(stats)
  return (
    <Layout>
      <SEO title="Productividad" />
      <div className="productivity-page content-body">
        <SectionTitle title="Productividad" />
        <div className="stats-grid">
          {stats.map(({ node }, index) => (
            <div className="stat" key={index}>
              <img src={node.imagen.file.url} alt="" />
              <div className="stat-content">
                <span>
                  <CountUp start={0} end={node.cantidad} />
                </span>
                <h4>{node.titulo}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProductivityPage

export const statsQuery = graphql`
  {
    stats: allContentfulStats(sort: { order: DESC, fields: id }) {
      edges {
        node {
          titulo
          cantidad
          imagen {
            file {
              url
            }
          }
        }
      }
    }
  }
`
