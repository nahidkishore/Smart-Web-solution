import React from "react";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
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
         <input type="file" ref={register({ required: true })}  name="file" />
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
