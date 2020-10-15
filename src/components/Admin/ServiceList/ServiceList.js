import React from "react";
import { useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ServiceListTable from "./ServiceListTable";

const ServiceList = () => {
  const [serviceList, setServiceList] = useState([]);
  useState(() => {
    fetch("https://secure-fortress-41944.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setServiceList(data));
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-5">
          <h2 className="text-center text-brand">All Service List</h2>
          <ServiceListTable serviceList={serviceList}></ServiceListTable>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
