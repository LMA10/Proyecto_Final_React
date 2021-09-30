import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LoginButton } from "./Auth/Login";
import { LogoutButton } from "./Auth/Logout";
import { Profile } from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {isAuthenticated ? (
          <>
            <LogoutButton />
            <Profile />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
