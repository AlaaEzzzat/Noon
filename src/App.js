import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import {
  getAllProducts,
  deleteProduct,
  getProductByID,
} from "./myFirebase/productFirebase";
function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductByID("CyOgr7oaYMnvyYYDzgEU").then((p) => {
      setProduct({ ...p.data(), id: p.id });
    });
  }, []);

  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
}
export default App;
