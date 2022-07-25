import React from "react";
import "./home.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from "./../allProducts/allProducts";
import NotFound from "./../notFound/notFound";
import DashBoard from "./../DashBoard/DashBoard";
import AllUser from "./../allUser/allUser";
import BestSeller from "./../bestSeller/bestSeller";
import PendingProducts from "./../pendingProducts/pendingProducts";
import FinishedOrders from "./../finishedOrders/finishedOrders";
import Navbar from "./../../Components/navbar/navbar";
import Sidebar from "./../../Components/sidebar/sidebar";
import Footer from "./../../Components/footer/footer";

const routes = [
  {
    path: "/Home",
    exact: true,
    main: () => <DashBoard />,
  },
  {
    path: "/Home/AllProduct",
    main: () => <AllProducts />,
  },
  {
    path: "/Home/PendingProducts",
    main: () => <PendingProducts />,
  },
  {
    path: "/Home/BestSeller",
    main: () => <BestSeller />,
  },

  {
    path: "/Home/AllUser",
    main: () => <AllUser />,
  },
  {
    path: "/Home/FinishedOrders",
    main: () => <FinishedOrders />,
  },
  {
    path: "*",
    main: () => <NotFound />,
  },
];
const Home = () => {
  return (
    <>
      <div className="Admin-Dashboard ">
        <Navbar />
        <div className="container-fluid">
          <div className="row pb-4" style={{ backgroundColor: "#404553" }}>
            <Router>
              <div className="">
                <Sidebar />
              </div>
              <div className="col-12 offset-0 col-sm-8 offset-sm-4 col-md-9 offset-md-3 col-lg-10 offset-lg-2 home pt-3 ">
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.main />}
                    />
                  ))}
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
