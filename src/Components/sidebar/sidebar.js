import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <nav className="admin__nav">
     
      <ul className="menu ">
      <li className="p-3">
      <Link className="navbar-brand " to="/">
          <img
            src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
            alt="Noon"
          />
        </Link>
        </li>
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
