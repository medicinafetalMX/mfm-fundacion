const path = require(`path`)

exports.createPages = ({ graphql, actions, createNodeId }) => {
  const { createPage, createNode } = actions
  console.log(createPage)

  return (
    graphql(
      `
        {
          doctors: allContentfulResearchers {
            edges {
              node {
                id
                name
                slug
                picture {
                  file {
                    url
                  }
                }
                experience {
                  json
                }
              }
            }
          }
        }
      `
    )
      // distinctions
      // medicalPartnerships
      // publishings
      .then(result => {
        if (result.errors) {
          console.log("Error retrieving contentful data", JSON.stringify(result.errors))
        }
        console.log(result.data.doctors.edges)

        // // Resolve the paths to our template
        const doctorPostTemplate = path.resolve("./src/templates/doctors.js")

        // // Then for each result we create a page.
        result.data.doctors.edges.forEach(({ node }) => {
          createPage({
            path: `/investigacion/${node.slug}/`,
            component: doctorPostTemplate,
            context: {
              slug: node.slug,
              id: node.id,
              name: node.name,
              // about: node.about,
              experience: node.experience,
              // medicalPartnerships: node.medicalPartnerships,
              // publishings: node.publishings,
              // distinctions: node.distinctions,
              picture: node.picture.file.url,
            },
          })
          const doctors = {
            slug: node.slug,
            id: node.id,
            name: node.name,
            picture: node.picture.file.url,
          }
          // createNode(doctors)
        })
      })
      .catch(error => {
        console.log("Error retrieving contentful data", error)
      })
  )
}
