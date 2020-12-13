/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

////exports.onCreatePage = async ({ page, actions }) => {
 //// const { createPage } = actions

    // Here you can create your static pages
    // createPage();
////}


const path = require('path');
exports.createPages = async function({ graphql, actions}){
    const {createPage} = actions;


    const result = await graphql(`
    query {
        allContentfulBlogPost {
          edges {
            node {
              author
              title
              postDate
              blogId
              detail {
                detail
              }
              image {
                file {
                  url
                }
              }
              content {
                content
              }
            }
          }
        }
      }
      
      
      

`)

    
    console.log('result', result.data.allContentfulBlogPost.edges);
    result.data.allContentfulBlogPost.edges.forEach((data) => {
        createPage({
            path:`/blog/${data.node.blogId}`,
            component: path.resolve(`./src/templates/baseTemplate.tsx`),
            context: {
                data: data
            }
        })
    })
}
 