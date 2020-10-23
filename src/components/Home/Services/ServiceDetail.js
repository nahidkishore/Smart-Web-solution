import React from "react";
import { useHistory } from "react-router-dom";
import "./Services.css";
const ServiceDetail = ({ service }) => {
  
  const history = useHistory();

  return (
    <div className="col-md-4 text-center my-5">
      <div
        onClick={() => history.push(`/dashboard/order/${service.title}`)}
        className="card d-flex align-items-center shadow"
      >
        <img
          src={`data:${service.file.contentType};base64,${service.file.img}`}
          alt=""
          className="img-fluid pt-2"
          width="20%"
        />
        <div className="card-body">
          <h5 className="mt-3 mb-3">{service.title}</h5>
          <p className="text-secondary">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
