import React from "react";
import "./navbarCss.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [pendingProduct, setPendingProduct] = useState([]);
  const [userName, setUserName] = useState("Alaa");

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
            alt="Noon"
          />
        </Link>
        <div className="nav-item">
          <p className="navTitle">Welcome Back! {userName}</p>
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
              <i class="fa fa-bell"></i>
            </li>
            <li className="nav-item">
              <Link className="btn btn-light" to="Login">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
