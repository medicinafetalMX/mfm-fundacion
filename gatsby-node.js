const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
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
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log(
          "Error retrieving contentful data",
          JSON.stringify(result.errors)
        )
      }

      const doctorPostTemplate = path.resolve("./src/templates/doctors.js")

      result.data.doctors.edges.forEach(({ node }) => {
        createPage({
          path: `/investigacion/${node.slug}/`,
          component: doctorPostTemplate,
          context: {
            slug: node.slug,
            id: node.id,
            name: node.name,
            picture: node.picture.file.url,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
