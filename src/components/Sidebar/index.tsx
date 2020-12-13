import React from 'react'


function Sidebar() {
    const mydata = [
        {
            name:"Discover",
            pic:"discover.jpg",
            url:"https://discovercorps.com/blog/top-travel-blogs-to-follow-in-2017/"
        },
        {
           name:"Destinations",
           pic:"Destinations.jpg",
           url:"https://www.nomadasaurus.com/destinations/"
       },
       {
           name:"Indie Traveller",
           pic:"Indie.jpg",
           url:"https://www.indietraveller.co/"
       },
       {
           name:"A Travel Blog",
           pic:"travel.jpg",
           url:"https://expertvagabond.com/how-to-start-travel-blog/"
       }
       ]  

       

    return (
        <div style={{marginTop:'50px'}}>
            <h2> Exciting Sites to Visit </h2>
        {
            
            mydata.map((d) => (
                <div style={{marginTop:'30px'}}>
                <h2> {d.name} </h2>
                
                <img src={require(`./../../pages/images/${d.pic}`)}   alt="image" width="180px" height="100px"/>
                <br/>
                <a href={d.url}> See More</a>
                <hr/>
                
                </div>
            ))
        }
        </div>
    )
}

export default Sidebar
