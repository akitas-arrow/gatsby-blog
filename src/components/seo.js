import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    query {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                defaultSiteUrl: siteUrl
                defaultImage: image
            }
        }
    }
`

function SEO({title, description, url, image}) {
    const { site } = useStaticQuery(query)
    const { defaultTitle, defaultDescription, defaultSiteUrl, defaultImage } = site.siteMetadata
    // const { pathname } = useLocation()
    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        siteUrl: `${defaultSiteUrl}${url || defaultSiteUrl}`,
        image: `${defaultSiteUrl}${image || defaultImage}`,
    }
    return (
        <Helmet>
            <html lang="ja" />
            <title>{seo.title}</title>
            <meta charset="utf-8" />
            <meta name="description" content={seo.description} />
            <meta property="og:url" content={seo.siteUrl} />
            <meta property="og:image" content={seo.image} />
        </Helmet>
    )
}

export default SEO
