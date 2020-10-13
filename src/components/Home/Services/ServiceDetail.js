import React from 'react';
import './Services.css'
const ServiceDetail = ({service}) => {
  
  return (
    <div className="col-md-4 text-center my-5">
      <div className="card d-flex align-items-center shadow">
      <img  src={service.img} alt="" className="img-fluid pt-2" width="20%" />
   <div className="card-body">
   <h5 className="mt-3 mb-3">{service.title}</h5>
    <p className="text-secondary" >{service.description}</p>
   </div>
      </div>
    
  </div>
  );
};

export default ServiceDetail;