import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./components/Customer/Order/Order";
import { createContext } from "react";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AddService from "./components/Admin/AddService/AddService";
import Review from "./components/Customer/Review/Review";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/Customer/OrderReview/OrderReview";
import ServiceList from "./components/Admin/ServiceList/ServiceList";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import Portfolio from "./components/Home/Portfolio/Portfolio";
import OurTeam from "./components/Home/Home/OurTeam/OurTeam";
import Sidebar from "./components/Shared/Sidebar/Sidebar";
import ContactUs from "./components/Home/Home/ContatactUs/ContactUs";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute exact path="/dashboard/order/:serviceName">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/addService">
            <AddService></AddService>
          </PrivateRoute>

          <Route path="/dashboard/reviews">
            <Review></Review>
          </Route>

          <PrivateRoute path="/dashboard/orderedList">
            <OrderReview></OrderReview>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Sidebar></Sidebar>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/Portfolio">
            <Portfolio></Portfolio>
          </Route>

          <Route path="/our-team">
            <OurTeam></OurTeam>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
