import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./myFirebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { getAllProducts } from "./myFirebase/productFirebase";
function App() {
  const [products, setProducts] = useState([]);
  const userCollectionRef = collection(db, "Products");
  useEffect(() => {
    /* const getProducts = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
    console.log(getAllProducts());
    console.log(users); */
  }, []);

  return (
    <div>
      {products.map((product, index) => {
        return <div id={index}>title : {product.title}</div>;
      })}
    </div>
  );
}

export default App;
