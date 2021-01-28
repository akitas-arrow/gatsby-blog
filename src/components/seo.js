import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"
import TopImage from '../images/top.jpg'
function SEO({title, description, image, article}) {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        twitterUsername,
    } = site.siteMetadata

    const defaultImage = `${siteUrl}${TopImage}`

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        // image: `${siteUrl}${image || defaultImage}`,
        image: image || defaultImage,
        url: `${siteUrl}${pathname}`,
    }
    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="google-site-verification" content="M1kZTwPG9ZrG-zy1Nmt4DhHBIUc0jsKyS2eDIEeaPI0" />
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
            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )
}

export default SEO
SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
                twitterUsername
            }
        }
    }
`