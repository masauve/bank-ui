import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AccountsPage from "./pages/AccountsPage";
import AccountInfoPage from "./pages/AccountInfoPage";
import TransactionPage from "./pages/TransactionPage";
import PrivateRoute from "./helpers/PrivateRoute.js";
import Nav from "./components/Nav.js";


function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/secured/account"><PrivateRoute><AccountsPage/></PrivateRoute></Route>
            <Route exact path="/secured/account/:accountid"><PrivateRoute><AccountInfoPage/></PrivateRoute></Route>
            <Route exact path="/secured/account/:accountid/transactions"><PrivateRoute><TransactionPage/></PrivateRoute></Route>
          </Switch>
        </Router>
      </ReactKeycloakProvider>
    </div>
  );
 }
 
 export default App;