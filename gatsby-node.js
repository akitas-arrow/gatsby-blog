const path = require('path');
const { paginate } = require("gatsby-awesome-pagination");

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/Templates/BlogDetail.js')
    const tagSearchListTemplate = path.resolve('./src/Templates/TagSearchList.js')
    const blogsTemplate = path.resolve('./src/Templates/Blogs.js')

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
            allContentfulTag {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    //ブログ詳細ページ
    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    //タグ検索一覧ページ
    res.data.allContentfulTag.edges.forEach(edge => {
        createPage({
            component: tagSearchListTemplate,
            path: `tags/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    paginate({
        createPage, // The Gatsby `createPage` function
        items: res.data.allContentfulBlogPost.edges, // An array of objects
        itemsPerPage: 1, // How many items you want per page
        // itemsPerPage: 10, // How many items you want per page
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/blog" : "/blog/page"),
        // pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
        component: blogsTemplate, // Just like `createPage()`
    })
}