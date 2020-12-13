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
import styles from '../components/Blogs/Blogs.module.css'
import {isLoggedIn} from "../utils/auth";


//export const Index = ({data}) => (
  export default ({data}) => {
    let public_data;
    if (!isLoggedIn()) {
        
      public_data = data.allContentfulBlogPost.edges.filter(e => e.node.blogId <= '300')
      public_data.sort((a,b) => (a.node.blogId > b.node.blogId) ? 1 : ((b.node.blogId > a.node.blogId) ? -1 : 0)); 
      //console.log(data)
      //console.log(public_data)
    }
    else{
        public_data = data.allContentfulBlogPost.edges
    }
    return (
  <Layout>
    <Status />
    <Top/>
    
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
   
   { !isLoggedIn() ?(
    <div style={{width:"70%", float:"left"}}>
    <div className={styles.bigbtncontainer}>
        <hr/>
      <button className={styles.bigbtn} type="button"> 
      <Link to="/app/login"> See More Exciting Blogs... </Link>
      </button>
    </div>
    <br/> <br/> <br/>
    </div>
   ):(
    <br/>
   )}
    <div>
      <Review/>
    </div>

    
  </Layout>
)}

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
