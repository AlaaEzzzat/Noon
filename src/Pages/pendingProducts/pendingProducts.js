import React from "react";
import { getPendingProducts, deletePendingProduct, addProduct  } from "../../myFirebase/productFirebase";
import { useState, useEffect } from "react";
export default function PendingProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    getPendingProducts().then((p) => {
      setProducts(p)
  
    })
  

  }, []);

  const ignoreProduct = (pId, pT) => {
   
    alert(`${pT} wil be deleted !`)
    
      deletePendingProduct(pId).then(() => {
       
        getPendingProducts().then((p) => {
          setProducts(p)
       
        })
       
      })
    
    
  }
  const acceptProduct = (p) => {
  

      alert(`${p.title} wil be added !`)
          
    deletePendingProduct(p.id).then(() => {
       delete p.id;
      addProduct(p)
      getPendingProducts().then((p) => {
      setProducts(p)
         
          })
         
        })
      
  
    }

    return (
      <>
      
        <div className="row m-auto gy-3 ">
      
          {products.map((product) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3  " hidden={product.stock <= 0}>
                <div className="card border-0 rounded-0 position-relative" style={{ width: "100%" }}>

                  <img src={product.thumbnail} className="rounded-0 m-0" style={{ width: "100%", height: "200px", objectFit: "fill" }} alt="..." />
      
                  <div className="card-body text-center">
                    <p className="card-title my-3 ">{product.title}</p>
                    <h5 className="card-text "> <span>EGP</span> {product.price}.00</h5>
      
                    <div className="d-flex justify-content-between ">
                      <p className="yellow-badge ps-1">express</p>
                      <p style={{ fontSize: "12px" }} class="text-warning  fw-bold"> <i class="bi bi-star-fill text-warning "></i>{product.rating}</p>
                    </div>
      
                    <div className="d-flex justify-content-between pb-2" >
                      <button className="btn btn-success " onClick={() => acceptProduct( product)} >Accept</button>
              
                      <button className="btn btn-danger" onClick={() => ignoreProduct(product.id, product.title)} >Ignore</button>
                    </div>
                
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </>


    );

  }

