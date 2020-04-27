import React from "react"
import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryHeader from "../components/primaryHeader"

import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Carousel from "react-grid-carousel"
const options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => <>{children}</>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  },
  renderMark: {
    [MARKS.BOLD]: text => <b className="date">{text}</b>,
  },
}

const EducationPage = ({ data: { educationPage } }) => {
  const content = documentToReactComponents(educationPage.content.json)
  const academicOffer = documentToReactComponents(
    educationPage.academicOffer.json,
    options
  )
  const Span = () => (
    <span
      style={{
        display: "none",
      }}
    ></span>
  )
  return (
    <Layout>
      <SEO title="Educación" />
      <div className="content-body education-page">
        <SectionTitle title="Educación" color="#003a81" />
        <div className="hero-image">
          <Carousel
            cols={1}
            rows={1}
            autoplay={5000}
            arrowLeft={Span}
            arrowRight={Span}
            loop
          >
            <Carousel.Item>
              <img
                width="100%"
                src={educationPage.cover.fluid.src}
                alt="Fotografía de Curso MFM"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="100%"
                src={educationPage.cover.fluid.src}
                alt="Fotografía de Curso MFM"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="100%"
                src={educationPage.cover.fluid.src}
                alt="Fotografía de Curso MFM"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {content}
        <PrimaryHeader title="Oferta Educativa 2020" color="#003a81" />
        <p>Esta es nuestra oferta de cursos, talleres y posgrados:</p>
        <div className="courses-list">
          <ul>{academicOffer}</ul>
        </div>

        <div className="image-grid">
          {educationPage.images.map(({ title, file }, index) => (
            <div className="image-container" key={index}>
              <img src={file.url} alt={title} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default EducationPage

export const query = graphql`
  {
    educationPage: contentfulEducationPage(
      contentful_id: { eq: "4bhWlEvvQJQRsjBjVGL9ey" }
    ) {
      id
      cover {
        fluid {
          src
        }
      }
      images {
        title
        fluid {
          src
        }
        file {
          url
        }
      }
      content {
        json
      }
      academicOffer {
        json
      }
    }
  }
`
