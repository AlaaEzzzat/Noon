import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

import { getAllProducts,deleteProduct,getProductByID } from "./myFirebase/productFirebase";
function App() {
  
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  

useEffect(() => {
  

 // getAllProducts().then((p)=>{
    //   console.log(p)
      
    //  setProducts(p)
      
    // })

  getProductByID("CyOgr7oaYMnvyYYDzgEU").then((p) => {
    console.log({ ...p.data(),id:p.id });
})
  
 
  
  
}, []);

  
  

  return (
    // <div>
    //   {products.map((product, index) => {
    //     return <div key={index}>title : {product.title}</div>;
    //   })}
    // </div>
    <>
      <h1>asd</h1>
    </>
  );
}

export default App;
