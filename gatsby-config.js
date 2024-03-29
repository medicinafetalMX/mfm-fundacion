require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fundación MFM`,
    description: `Somos un grupo de especialistas, expertos en diagnóstico prenatal avanzado y cirugía fetal mínimamente invasiva. `,
    author: `@osmar_ro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }, 
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mfmf-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `psfzfnk414mo`,
        accessToken: `VDPsmCYJfNzJDtgIf13GFivUWQJI4b_bdZQtDNuPPy0`,
        downloadLocal: true,
      },
    },
  ],
}
