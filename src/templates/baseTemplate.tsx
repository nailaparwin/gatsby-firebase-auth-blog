import React from 'react'
import styles from './baseTemplate.module.css'
import Header from '../components/Header';
import {isLoggedIn} from "../utils/auth";

function baseTemplate({pageContext}) {
    console.log(pageContext)
    return (
        <>
        <Header/>

         {/* <header>
         <div className={styles.container}>
             <div id="branding" className={styles.branding}>
                 <h1> <span className={styles.highlight}>Dubai </span> Attractions </h1>
             </div>
             <nav>
                 <ul>
                     <li className={styles.current}><a href="index.html">Home</a></li>
                     <li><a href="About.html">About</a></li>
                     <li><a href="Services.html">Contact Us</a></li>
                 </ul>
             </nav>
         </div>
     </header> */}

     <section id="showcase" className={styles.showcase}>
         <div className={styles.container}>
             <h1>
                {pageContext.data.node.title}
             </h1>
             <img src={pageContext.data.node.image.file.url} alt="image" />
             <p className={styles.para}> 
             {pageContext.data.node.content.content}
             </p>

             { !isLoggedIn() && pageContext.data.node.blogId > 200 ?(
             <div className={styles.sidebarbox}>
            <p className={styles.para}>{pageContext.data.node.detail.detail}</p>
            <p className={styles.readmore}><a href="/app/login" className={styles.button_2}>Login to Read More</a></p>
            </div>
             ) :(
                 <>
                <p className={styles.para}>
                {pageContext.data.node.detail.detail}
                </p> 
                <img src={require(`./../pages/images/pic.png`)}   alt="image" />
                <br/><br/>
                </>
             )
}
         </div>
     </section>

        </>

    )
}

export default baseTemplate
