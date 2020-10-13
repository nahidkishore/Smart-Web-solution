import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import OrderForm from "./OrderForm";
import logo from "../../../images/logos/logo.png"
const Order = () => {
  return (
    <section> 
      <div className=" m-2"> 
        <img src={logo} alt="" className="img-fluid" width="60%"/>
      </div>
      <div className="container-fluid row ml-5 mt-5">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8  order-Form">
          <OrderForm></OrderForm>
        </div>
      </div>
    </section>
  );
};

export default Order;
