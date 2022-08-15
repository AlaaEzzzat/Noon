import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Pages/notFound/notFound";

import Home from "./Pages/Home/home";

import Login from "./Pages/login/login";
import { Redirect } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";
import { NameProvider } from "./contexts/name";
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("adminEmail") ? (
          children
        ) : (
          <Redirect to="/Login" />
        );
      }}
    />
  );
}
function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Router>
        <NameProvider value={{ name, setName }}>
          <Switch>
            <Route path="/" exact component={Login} />

            <PrivateRoute path="/Home">
              <Home />
            </PrivateRoute>
            <Route path="/Home/AllUser" exact component={Home} />
            <Route path="/Home/BestSeller" exact component={Home} />
            <Route path="/Home/PendingProducts" exact component={Home} />
            <Route path="/Home/AllProduct" exact component={Home} />
            <Route path="/Home/FinishedOrders" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </NameProvider>
      </Router>
    </>
  );
}
export default App;
