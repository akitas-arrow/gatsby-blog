const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    // ...config
    title: "COCOLO",
    description: "起業や独立をしたい社会人にむけたWebメディアです。"
  },
  plugins: [
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-component",
          },
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
      },
    },
    // 'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     // name: config.title,
    //     // short_name: config.shortName,
    //     // description: config.description,
    //     // start_url: config.pathPrefix,
    //     // background_color: config.backgroundColor,
    //     // theme_color: config.themeColor,
    //     // display: 'standalone',
    //     // icon: config.favicon,
    //     icon: `src/images/favicon.png`
    //   },
    // },
    'gatsby-plugin-offline'
  ],
}
