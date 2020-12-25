import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    query {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
            }
        }
    }
`

function SEO({title, description}) {
    const { site } = useStaticQuery(query)
    const { defaultTitle, defaultDescription } = site.siteMetadata
    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
    }
    return (
        <Helmet>
            <html lang="ja" />
            <title>{seo.title}</title>
            <meta charset="utf-8" />
            <meta name="description" content={seo.description} />
        </Helmet>
    )
}

export default SEO
