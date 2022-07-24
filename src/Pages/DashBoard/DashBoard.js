import React from "react";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../myFirebase/productFirebase";
import { getAllUsers } from "../../myFirebase/userFirebase";
import "./dashboard.css";
export default function DashBoard() {
  const [productNumber, setProductNumber] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    getAllProducts().then((p) => {
      setProductNumber(p.length);
    });
    getAllUsers().then((u) => {
      setUsersCount(u.length);
    });
  }, []);

  return (
    <div className="dashboard h-100">
      <div className="row">
        <div className="col-12">
          <div className="sales">
            <h3
              className="text-center  p-5"
              style={{ fontSize: "3rem", color: "#FFF" }}
            >
              Our Summary
            </h3>
          </div>
        </div>
        <div className="col-md-6 cardCon">
          <div className="card mb-3">
            <div className="card-body text-center ">
              <i className="fa fa-eye"></i>
              <h5 className="card-title">Overall Visited</h5>
              <h4 className="card-text">
                <b>3000</b> Visit
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-6 cardCon">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-product-hunt"></i>
              <h5 className="card-title">All Products</h5>
              <h4 className="card-text">
                <b>{productNumber}</b> Product
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-6 cardCon">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-users"></i>
              <h5 className="card-title">All Users</h5>
              <h4 className="card-text">
                <b>{usersCount}</b> User
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-6 cardCon">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-dollar"></i>
              <h5 className="card-title">Total Earned</h5>
              <h4 className="card-text">
                <b>1500</b> $
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
