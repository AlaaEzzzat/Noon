import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <>
      <button
        className="btn m-auto btn-col mt-2 "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <i className=" fa fa-list"></i>
      </button>

      <nav className="admin__nav collapse  multi-collapse" id="collapseExample">
        <ul className="menu ">
          <button
            type="button"
            class="btn-close position-absolute end-0 "
            aria-label="Close "
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          ></button>

          <li className="p-3">
            <Link className="navbar-brand " to="/Home">
              <img
                src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                alt="Noon"
                style={{ height: "40px" }}
              />
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/AllProduct">
              All Products
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/PendingProducts">
              Pending Products
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/AllUser">
              All Users
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/FinishedOrders">
              Finished Orders
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/BestSeller">
              Best Sellers
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="admin__nav1">
        <ul className="menu ">
          <li className="p-3">
            <Link className="navbar-brand " to="/Home">
              <img
                className="alaa"
                src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                alt="Noon"
                style={{ height: "40px" }}
              />
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/AllProduct">
              All Products
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/PendingProducts">
              Pending Products
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/AllUser">
              All Users
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/Home/FinishedOrders">
              Finished Orders
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Home/BestSeller">
              Best Sellers
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
