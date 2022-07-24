import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import {
  getAllProducts,
  deleteProduct,
  getProductByID,
} from "./myFirebase/productFirebase";
import FinishedOrders from "./Pages/Home/FinishedOrders";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Pages/notFound/notFound";
import Home from "./Pages/Home/home";
import Login from "./Pages/login/login";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
/* import Popper from "@popperjs/core"; */
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  /* const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});


  // useEffect(() => {
  //   getProductByID("CyOgr7oaYMnvyYYDzgEU").then((p) => {
  //     setProduct({ ...p.data(), id: p.id });
  //   });
  // }, []);

  return (
    <>
    <FinishedOrders></FinishedOrders>

  useEffect(() => {
    getProductByID("CyOgr7oaYMnvyYYDzgEU").then((p) => {
      setProduct({ ...p.data(), id: p.id });
    });
  }, []); */

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Home" exact component={Home} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
