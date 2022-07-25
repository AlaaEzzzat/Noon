import React from "react";
import { useState, useEffect } from "react";
import { getAllOrders } from "./../../myFirebase/FinishedOrdersFirebase";

const FinishedOrders = () => {
  const [Orders, setOrders] = useState([]);
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    getAllOrders().then((Orders) => {
      setOrders(Orders);
    });
  }, []);
  return (
    <>
      <table
        className="table table-striped container border my-5 text-center"
        style={{ backgroundColor: "#FFF" }}
      >
        <thead className=" table-warning">
          <tr>
            <th>Order Number</th>
            <th>User ID</th>
            <th>Totall Price</th>
            <th>Products Category</th>
            <th>Number Of Products</th>
            <th>Cash On Delivery</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {Orders.map((RecievedOrder, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{RecievedOrder.userId}</td>
                <td>{RecievedOrder.totallprice} $</td>
                <td>
                  {Orders[index].productscategory.map((RecievedCategory, i) => {
                    return <p key={i}>{RecievedCategory}</p>;
                  })}
                </td>
                <td>{RecievedOrder.numberofproducts}</td>
                <td>
                  {RecievedOrder.cashondelivery == true ? "Yes" : "Paid Online"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FinishedOrders;
