import React, { useEffect, useState } from "react";
import ServiceDetail from "./ServiceDetail";
import { CircularProgress } from "@material-ui/core";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://secure-fortress-41944.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="service mt-5">
      <h1 className="text-center">
        Provide Awesome <span className="text-brand">Service</span>
      </h1>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 ">
          {services.length === 0 && <CircularProgress />}
          {services.map((service) => (
            <ServiceDetail service={service} key={service._id}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
