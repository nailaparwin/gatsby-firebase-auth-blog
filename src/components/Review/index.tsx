import React, {useState, useEffect, useContext} from 'react'
//import styles from './Header.module.css'
import { GlobalContext } from '../../context/GlobalState';

function Review() {
    const { feeds } = useContext(GlobalContext);
    const {addFeeds }= useContext(GlobalContext);
    

    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [refresh, setRefresh] = useState(false);

    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value)
    }
    
    const handleMsgChange = (event) => {
        event.preventDefault();
        setMsg(event.target.value)
    }

    /* const feeds = [
        {
            name:"Awaiz",
            message:"Its amazing ....",
            pic:"feedimg.jpg",
        }
       ]   */

    function addfeed(event){
        event.preventDefault();    
        const newfeed = {name: name, message: msg, pic: "feedimg.jpg"}
        addFeeds(newfeed);
        setName('');
        setMsg('');
        console.log(feeds);
    }

    /* useEffect( ()=>{

    },[feeds.length]) */
    

    return (
        <div style={{marginTop:'50px' }}>
            
            <div style={{width: '100%', margin: 'auto', padding: '10px', overflow: 'hidden', backgroundColor:'#35424a', color:'white'}}>
                <h1> Your Feedback </h1>
                <form action="">
                    <input type="text" placeholder="name"  value={name} onChange={handleNameChange} style={{color:'black'}} />
                    &nbsp; &nbsp; 
                    <input type="text" placeholder="your feedback" value={msg} onChange={handleMsgChange}  style={{color:'black'}}  width='60px'/>
                    &nbsp; &nbsp;
                    <button onClick={addfeed}> Submit </button>
                    <br/>
                    <br/>
                </form>
            </div>
        {
            
            feeds.map((f) => (
                <div style={{marginTop:'30px', clear:'both'}} id="fdk">
                    
                    <div style={{float:'left', width:'20%'}}>
                    <img src={require(`./../../pages/images/feedimg.png`)}   alt="image" width="80px" height="80px"/>
                    </div>
                    <div style={{float:'left', width:'80%'}}>
                        <p> {f.name} </p>
                        <p> {f.message} </p>
                    </div>                 
                
                </div>
            ))
        }
        </div>
    )
}

export default Review
