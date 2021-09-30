import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
      return <div>Loading...</div>
  }

  function showMe(){
      const us = user
      console.log(us)
  }
  showMe()
  //console.log(`User -> ${user}`)
  return (
          <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
          </div>
      
  )

};
