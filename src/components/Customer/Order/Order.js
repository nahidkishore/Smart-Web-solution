import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import OrderForm from "./OrderForm";

const Order = () => {
  return (
    <section>
      <div className="container-fluid row ml-5 mt-5">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <OrderForm></OrderForm>
        </div>
      </div>
    </section>
  );
};

export default Order;
