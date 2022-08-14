import React from "react";
import "./navbarCss.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { getUserByEmail } from "./../../myFirebase/userFirebase";
import { nameContext } from "./../../contexts/name";

export default function Navbar() {
  const [pendingProduct, setPendingProduct] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    const adminName = localStorage.getItem("adminName");
    if (adminName) {
      setName(adminName);
    }
  }, []);

  return (
    <nav className="navbar  navbar-expand-lg ">
      <div className="container-fluid  ">
        <div className="nav-item m-auto   ">
          <p className="navTitle  ">Welcome Back! {name}</p>
        </div>
        <div className="d-flex justify-content-center">
          <ul className="navbar-nav d-flex align-items-center flex-row justify-content-between">
            <li
              className="nav-item notification"
              style={{
                backgroundColor:
                  pendingProduct.length > 0 ? "rgb(154, 245, 9)" : "#FFF",
              }}
            >
              <i className="fa fa-bell"></i>
            </li>
            <li className="nav-item">
              <Link className="btn btn-light" to="/Login">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
