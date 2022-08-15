import React from "react";
import { useState, useEffect } from "react";
import { getAllOrders } from "../../myFirebase/FinishedOrdersFirebase";
import { getUserByID } from "../../myFirebase/userFirebase";
export default function BestSeller() {
  /* 
  const arr = [{id: 1}, {id: 7}, {id: 3}, {id: 14}];

  const ids = alluser.map(user => {
    return user.id;
  });
  const max = Math.max(...ids);
  console.log(max); */
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});
  /* useEffect(() => {
    const getbestSeller = async () => {
      var bestUserId;
      const allOrdersPrice = getAllOrders().then((Orders) => {
        setOrders(Orders);
        const prices = orders.map((order) => {
          return order.totallprice;
        });
        const maxPrice = Math.max(...prices);
        const maxOrder = orders.find((order) => order.totallprice == maxPrice);
        bestUserId = maxOrder.userId;
      });

      const userdata = await getUserByID(bestUserId).then((user) => {
        setUser({ ...user });
      });

      return userdata;
    };
  }, []); */
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <div
            className="card rounded-3 mb-2 border-0 position-relative"
            style={{
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 0 5px yellow",
            }}
          >
            <img
              src={user.image}
              style={{
                width: "fit-content",
                maxWidth: "100%",
                margin: "auto",
                height: "200px",
                objectFit: "fill",
              }}
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-title my-3 ">{user.fullName}</p>
              <h5 className="card-text ">{user.email}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
