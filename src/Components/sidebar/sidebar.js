import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
  <>
<button className="btn m-auto btn-col mt-2 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   <i className=" fa fa-list"></i>
  </button>
     
    <nav className="admin__nav collapse  multi-collapse"  id="collapseExample" >
      
        <ul className="menu ">

        <button type="button" class="btn-close position-absolute end-0 " aria-label="Close "data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></button>
        
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

      <nav className="admin__nav1" >
      
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
    </>
  );
}
