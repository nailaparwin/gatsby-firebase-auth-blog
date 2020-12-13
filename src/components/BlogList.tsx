import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"
import Top from "../components/Top"
import Sidebar from "../components/Sidebar"
import Review from "../components/Review"
import Blogs from "../components/Blogs"
import { graphql } from 'gatsby';
import styles from './Blogs/Blogs.module.css'
import {isLoggedIn} from "../utils/auth";



    const BlogList = ({data}) => {
  
    let public_data;
    if (!isLoggedIn()) {
        
      public_data = data.allContentfulBlogPost.edges.filter(e => e.node.blogId === '100')
      console.log(data)
      console.log(public_data)
      }
      else{
        public_data = data.allContentfulBlogPost.edges
      }
    return (
  <Layout>
    <Status />
    <Top/>
    {/* <View title="Firebase Authentication Starter"> */}
    
    
    
      <div style={{width:"70%", float:"left"}}>

      

     {
       public_data.map((node)=>
      //data.allContentfulBlogPost.edges.map((node)=>
      <>
        <Blogs props={node}/>
        
      </>
      )
     }
    
    </div>
    <div style={{width:"25%", float:"right"}}>
      <Sidebar/>
    </div>
    {/* <div style={{ clear:"both"}}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="button"> 
      <Link to="/app/allblogs">See More Blogs </Link>
      </button>
    </div> */}
 <div style={{width:"70%", float:"left"}}>
  <div className={styles.bigbtncontainer}>
        <hr/>
      <button className={styles.bigbtn} type="button"> 
      <Link to="/app/login"> See More Exciting Blogs... </Link>
      </button>
    </div>
    <br/> <br/> <br/>
    </div>

    <div>
      <Review/>
    </div>

    {/* </View> */}
  </Layout>
)}

export default BlogList

export const query = graphql`
 {
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


`
