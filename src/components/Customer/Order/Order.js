import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import OrderForm from "./OrderForm";
import logo from "../../../images/logos/logo.png"
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
const Order = () => {
  const { register, handleSubmit, errors } = useForm(); 
  
  const onSubmit=()=>{
    
  }
  return (
    <section> 
      <div className=" m-2 row"> 
      <div className="col-md-4">
      <img src={logo} alt="" className="img-fluid" width="60%"/>
      </div>
      </div>
      <div className="container-fluid row ml-5 mt-5">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8  order-Form">
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group   col-md-8 col-sm-12">
          <input
            type="text"
            ref={register({ required: true })}
            name="name"
            placeholder="Your Name / company's name"
            className="form-control"
            
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group  col-md-8 col-sm-6">
          <input
            type="text"
            ref={register({ required: true })}
            name="email"
            placeholder="Your email Address"
            className="form-control"
           
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="form-group  col-md-8 col-sm-6">
          <input
            type="text"
            ref={register({ required: true })}
            name="name"
            placeholder="Graphic Design"
            className="form-control"
         
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="form-group  col-md-8 col-sm-6">
          <textarea
            type="text"
            ref={register({ required: true })}
            className="form-control"
            name="details"
            id=""
            cols="30"
            rows="10"
            placeholder="Project Details "
          ></textarea>
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="form-group row col-md-8 col-sm-6">
        <div className="col-md-4">
        <input
            type="number"
            ref={register({ required: true })}
            name="price"
            placeholder="price"
            className="form-control"
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}

        </div>

         <div className="col-md-4">
         <input  type="file" ref={register({ required: true })}  name="image" />
         </div>
        </div>

        <div className="form-group col-md-8 col-sm-6">
          <button type="button" className="button">
            Send
          </button>
        </div>
      </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
