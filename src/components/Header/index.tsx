import React, { useState }  from "react"
import styles from './Header.module.css'

import { Link, navigate } from "@reach/router";
import { getUser, isLoggedIn, logout } from "../../utils/auth";
import { useFirebase } from "gatsby-plugin-firebase";

function Header() {

  const [firebase, setFirebase] = useState<any>();

  useFirebase((fb) => {
    setFirebase(fb);
  }, []);

  let details;
  if (!isLoggedIn()) {
    details = (
      <li><a href="/app/login">Login</a></li>
    );
  } else {
    const { displayName, email } = getUser();
    details = (
      <li>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            logout(firebase).then(() => navigate(`/`));
          }}
        >
          <u>Logout</u>
        </a>
        </li>
    );
        }
return (
  <div>               

<header>
   <div className={styles.container}>
       <div id="branding" className={styles.branding}>
           <h1> <span className={styles.highlight}>my </span> Travel Guide </h1>
       </div>
       <nav>
           <ul>
               <li className={styles.current}><a href="/">Home</a></li>
               <li><a href="/about">About</a></li>
               {details}


               
           </ul>
       </nav>
   </div>
</header>

  </div>

)
}
export default Header
