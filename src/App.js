import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Pages/notFound/notFound";

import Home from "./Pages/Home/home";

import Login from "./Pages/login/login";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";
import { NameProvider } from "./contexts/name";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Router>
        <NameProvider value={{ name, setName }}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Home" exact component={Home} />
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
