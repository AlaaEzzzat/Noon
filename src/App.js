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

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  // useEffect(() => {
  //   getProductByID("CyOgr7oaYMnvyYYDzgEU").then((p) => {
  //     setProduct({ ...p.data(), id: p.id });
  //   });
  // }, []);

  return (
    <>
    <FinishedOrders></FinishedOrders>
    </>
  );
}
export default App;
