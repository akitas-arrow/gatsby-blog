import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"
import ogp_img from "../images/top.jpg"
import PropTypes from "prop-types"
function SEO({title, description, image, article}) {
    const { site } = useStaticQuery(query)
    const { defaultTitle, defaultDescription, defaultSiteUrl } = site.siteMetadata
    // const { defaultTitle, defaultDescription, defaultSiteUrl, defaultImage } = site.siteMetadata
    const { pathname } = useLocation()
    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        image: `${defaultSiteUrl}${image || ogp_img}`,
        // image: `${defaultSiteUrl}${image || defaultImage}`,
        url: `${defaultSiteUrl}${pathname}`,
    }
    return (
        <Helmet>
            <html lang="ja" />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
            <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {/* {twitterUsername && (
            <meta name="twitter:creator" content={twitterUsername} />
            )} */}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
            <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )
}

export default SEO

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

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}