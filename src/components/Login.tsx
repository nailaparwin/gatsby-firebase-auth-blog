import React from "react"
import { navigate } from '@reach/router';
import View from "./View"
import { useState} from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn } from "../utils/auth"
import { useFirebase } from "gatsby-plugin-firebase"

const Login = () => {
  const [firebase, setFirebase] = useState<any>();

  useFirebase(firebase => {
    setFirebase(firebase);
  }, [])

  if (isLoggedIn()) {
    //navigate(`/app/bloglist`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        //auth.FaceBookAuthProvider.PROVIDER_ID,
    
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          //navigate(``);
          return true
        }
      }
    };
  }

  return (
    <View title="Log In">
      <p>Please sign-in to access to the private route:</p>
      {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()}/>}
    </View>
  );

}

export default Login
