import React from 'react'
import Header from '../components/Header';
import Top from '../components/Top';

function about() {
    return (
        <div>
            
        <Header/>
        <Top/>
        <div style={{textAlign:'center', marginTop:'10px'}}>
            <p> A Blog using gatsby</p>
            <p> 👋 Contentful</p>
            <p> 👋 and Firebase Authentication</p>
            <p> 🧡💛💚🤍💙💖💜❤️ </p>
            <p> This Blog is about famous and beautiful places</p>
            <p><b> First two blogs are free</b></p>
            <p><b> Few lines of third blog are free</b></p>
            <p> To see all need email or google authentication</p>
            <p> 🧡💛💚🤍💙💖💜❤️ </p>
        </div>
        </div>
    )
}

export default about
