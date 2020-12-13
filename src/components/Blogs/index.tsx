import { navigate } from 'gatsby'
import React from 'react'
import { Link } from "gatsby"
import styles from './Blogs.module.css'

function Blogs({props}) {
    
    return (
        <div>               

     <section id="showcase" className={styles.showcase}>
         <div className={styles.container}>
             <h1>
                 
                {props.node.title}
             </h1>
             <p> Post Date: {props.node.postDate} -  Post By: {props.node.author} </p>
             <img src={props.node.image.file.url} alt="image"/>
             <p className={styles.header1}> 
             {props.node.content.content}
             </p>
         </div>
         <button onClick={()=>{navigate(`/blog/${props.node.blogId}`)}}> View More </button>
        {/*  <footer/> */}
            
       
     </section>
     
        </div>

    )
}

export default Blogs
