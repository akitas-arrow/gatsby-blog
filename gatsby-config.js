const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: "COCOLO",
    titleTemplate: "%s - Blog",
    description: "起業や独立をしたい社会人にむけたWebメディア",
    siteUrl: `https://cocolo.netlify.app`,
    url: `https://cocolo.netlify.app`,
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
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'COCOLO',
        short_name: 'COCOLO',
        description: "起業や独立をしたい社会人にむけたWebメディアです。",
        start_url: "/",
        background_color: '#e9eff4',
        theme_color: '#CED4BE',
        display: 'standalone',
        icon: `src/images/cocolo-icon.png`
      },
    },
    'gatsby-plugin-offline'
  ],
}
