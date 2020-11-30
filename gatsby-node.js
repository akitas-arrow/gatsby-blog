const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/Templates/BlogDetail.js')

    const res = await graphql(`
        query {
            allContentfulBlogPost(sort:{
                fields: createdDate,
                order: DESC
            } ){
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}