import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <nav className="admin__nav">
      <button className="showBtn">Show</button>
      <ul className="menu d-flex">
        <li className="menu__item">
          <Link className="menu__link" to="/AllProduct">
            All Products
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/PendingProducts">
            Pending Products
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/SoldProducts">
            sold Products
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/AllUser">
            All Users
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/BestSeller">
            Best Sellers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
