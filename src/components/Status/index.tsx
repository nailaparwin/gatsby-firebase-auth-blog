import React from "react";
import { useState } from "react";
import { Link, navigate } from "@reach/router";
import { getUser, isLoggedIn, logout } from "../../utils/auth";
import { useFirebase } from "gatsby-plugin-firebase";

export default () => {
  const [firebase, setFirebase] = useState<any>();

  useFirebase((fb) => {
    setFirebase(fb);
  }, []);

  let details;
  if (isLoggedIn()) {
    
    const { displayName, email } = getUser();
    details = (
      <p className="text-right px-5">
         {displayName} ({email}
        )!
        {` `}
        
      </p>
    );
  }

  return <div>{details}</div>;
};
