import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import {
  getAllProducts,
  deleteProduct,
  getProductByID,
} from "./myFirebase/productFirebase";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Pages/notFound/notFound";

import AllUser from "./Pages/allUser/allUser";
import BestSeller from "./Pages/bestSeller/bestSeller";
import PendingProducts from "./Pages/pendingProducts/pendingProducts";
import AllProducts from "./Pages/allProducts/allProducts";
import Home from "./Pages/Home/home";
import FinishedOrders from "./Pages/finishedOrders/finishedOrders";
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
          <Route path="/Home/AllUser" exact component={Home} />
          <Route path="/Home/BestSeller" exact component={Home} />
          <Route path="/Home/PendingProducts" exact component={Home} />
          <Route path="/Home/AllProduct" exact component={Home} />
          <Route path="/Home/FinishedOrders" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="*" exact component={NotFound} />

          {/* */}
        </Switch>
      </Router>
    </>
  );
}
export default App;
