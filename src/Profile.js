import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import request from "request"



export const Profile = () => {
    
  const { user, isLoading } = useAuth0();



  var options = { method: 'POST',
    url: 'https://dev-k4p8d93b.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"x5iP6nUyoqJEntgtcncoPFFqEUPXrH02","client_secret":"w99yX4q4fx2aVxpHRRAzayZuMFVRd0z6rMy_dp6wcy_TBYGZmEbqQ2GooHscrepp","audience":"https://dev-k4p8d93b.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });

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
