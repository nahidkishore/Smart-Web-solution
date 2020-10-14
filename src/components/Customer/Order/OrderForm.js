import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";

const OrderForm = () => {
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
const [orders,setOrders]= useState({});
const [projectFile,setProjectFile]=useState(null);


const handleFileChange = e => {
  const newFile = e.target.files[0]
  setProjectFile(newFile);
}
const handleChange=(e)=>{
  const newOrders={...orders};
  newOrders[e.target.name] = e.target.value
  setOrders(newOrders)
  console.log(orders, loggedInUser)
}

  const handleSubmit = (e) => {
     e.preventDefault()
    const formData = new FormData();
    formData.append('projectFile', projectFile);
    formData.append('service', loggedInUser.service);
    formData.append('orderDescription', orders.orderDescription);
    formData.append('name', loggedInUser.name || orders.name);
    formData.append('email', loggedInUser.email || orders.email);
    formData.append('price',orders.price);
    formData.append('thumbnailType', loggedInUser.thumbnailType);
    formData.append('thumbnailImg', loggedInUser.thumbnailImg);
    formData.append('serviceDescription', loggedInUser.serviceDescription);

    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      body: formData
  })
  /* .then(response => response.json()) */
  .then(res => res.json())
         .then(success => {
           if(success){
            alert('order Added Successfully')
           } 
             
            console.log(success)
         })
         .catch(error => {
             console.error(error)
         })
};
  



  
  return (
    <div>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="form-group   col-md-8 col-sm-12">
          <input
            type="text"
           
            name="name"
            placeholder="Your Name / company's name"
            className="form-control"
            value={loggedInUser.name}
            onchange={handleChange}
            required
          />
        
        </div>
        <div className="form-group  col-md-8 col-sm-6">
          <input
            type="text"
           
            name="email"
            placeholder="Your email Address"
            className="form-control"
            value={loggedInUser.email}
            onChange={handleChange}
            required
          />
       
        </div>

        <div className="form-group  col-md-8 col-sm-6">
          <input
            type="text"
            
            name="name"
            placeholder="Graphic Design"
            className="form-control"
            value={loggedInUser.service}
            onChange={handleChange}
            required
          />
        
        </div>

        <div className="form-group  col-md-8 col-sm-6">
          <textarea
            type="text"
         
            className="form-control"
            name="details"
            id=""
            cols="30"
            rows="10"
            placeholder="Project Details "
            onChange={handleChange}
            required
          ></textarea>
        
        </div>

        <div className="form-group row col-md-8 col-sm-6">
        <div className="col-md-4">
        <input
            type="number"
          
            name="price"
            placeholder="price"
            className="form-control"
            onChange={handleChange}
            required
          />
         

        </div>

         <div className="col-md-4">
         <input onChange={handleFileChange} type="file"   name="file" required />
         </div>
        </div>

        <div className="form-group col-md-8 col-sm-6">
          <button type="button" className="button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
