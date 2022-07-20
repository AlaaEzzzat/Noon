import React from "react";
import "./home.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from "./../allProducts/allProducts";
import NotFound from "./../notFound/notFound";
import AllUser from "./../allUser/allUser";
import SoldProducts from "./../soldProducts/soldProducts";
import BestSeller from "./../bestSeller/bestSeller";
import PendingProducts from "./../pendingProducts/pendingProducts";
import Navbar from "./../../Components/navbar/navbar";
import Sidebar from "./../../Components/sidebar/sidebar";
import Footer from "./../../Components/footer/footer";

const Home = () => {
  return (
    <>
      <div className="Admin-Dashboard ">
        <Navbar />
        <div className="container-fluid">
        <div className="row">
          <Router>
            <div className="col-sm-2">
              <Sidebar />
            </div>
            <div className="col-sm-10">
              <Switch>
              <Route path="/" exact children={<AllProducts/>} />
                <Route path="/AllProduct" exact children={<AllProducts/>} />
                <Route path="/SoldProducts" exact children={<SoldProducts />} />
                <Route path="/AllUser" exact children={<AllUser/>} />
                <Route path="/BestSeller" exact children={<BestSeller />} />
                <Route
                  path="/PendingProducts"
                  exact
                  children={<PendingProducts />}
                />
                <Route path="*" exact children={<NotFound />} />
              </Switch>
            </div>
          </Router>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
