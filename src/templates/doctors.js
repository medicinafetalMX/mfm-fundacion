import React from "react"
import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import PrimaryHeader from "../components/primaryHeader"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
}

export default function DoctorsTemplate({ data: { doctor } }) {
  console.log(doctor)
  const about = documentToReactComponents(doctor.about.json)
  const experience = documentToReactComponents(doctor.experience.json)
  const medicalPartnerships = documentToReactComponents(
    doctor.medicalPartnerships.json
  )
  const publishing = documentToReactComponents(doctor.publishing.json)
  const distinctions = documentToReactComponents(doctor.distinctions.json)

  return (
    <Layout>
      <SEO title={doctor.name} />
      <div className="content-body doctor-page">
        <SectionTitle title={doctor.name} />
        <div className="doctor-profile row">
          <img src={doctor.picture.file.url} alt={doctor.name} />
          <div className="content">{about}</div>
        </div>
        <PrimaryHeader title="Trayectoria Académica" />
        {experience}
        <PrimaryHeader title="Asociaciones Médicas" />
        {medicalPartnerships}
        <PrimaryHeader title="Publicaciones" />
        {publishing}
        <PrimaryHeader title="Distinciones" />
        {distinctions}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    doctor: contentfulResearchers(slug: { eq: $slug }) {
      id
      name
      slug
      distinctions {
        json
      }
      medicalPartnerships {
        json
      }
      experience {
        json
      }
      about {
        json
      }
      publishing {
        json
      }
      picture {
        file {
          url
        }
      }
    }
  }
`
