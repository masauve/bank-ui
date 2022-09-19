import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute.js";
import Nav from "./components/Nav.js";


function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <Router>
          <Routes>
            <Route exact path="/" element={<WelcomePage/>}/>
            <Route exact path="/secured" element={<PrivateRoute><SecuredPage/></PrivateRoute>}/>
          </Routes>
        </Router>
      </ReactKeycloakProvider>
    </div>
  );
 }
 
 export default App;