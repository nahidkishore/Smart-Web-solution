import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import logo from "../../../images/logos/logo.png";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
const Order = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { serviceName } = useParams();

  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("service", data.service);
    formData.append("details", data.details);
    formData.append("price", data.price);
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Data added successfully");
          fieldReset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fieldReset = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("service").value = "";
    document.getElementById("details").value = "";
    document.getElementById("price").value = "";
    document.getElementById("file").value = "";
  };

  return (
    <section>
      <div className=" m-2 row">
        <div className="col-md-4">
          <img src={logo} alt="" className="img-fluid" width="60%" />
        </div>
      </div>
      <div className="container-fluid row ml-5 mt-5">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8  order-Form">
          <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-7">
                <div class="form-group">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    defaultValue={loggedInUser.name}
                    ref={register({ required: true })}
                    placeholder="Your name / company's name"
                  />
                  {errors.name && (
                    <span className="error">Name is required</span>
                  )}
                </div>
                <div class="form-group">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    defaultValue={loggedInUser.email}
                    ref={register({ required: true })}
                    placeholder="Your email address"
                  />
                  {errors.name && (
                    <span className="error">Email is required</span>
                  )}
                </div>
                <div class="form-group">
                  <input
                    className="form-control"
                    name="service"
                    id="service"
                    defaultValue={serviceName}
                    ref={register({ required: true })}
                    placeholder="service"
                    
                  />
                  {errors.name && (
                    <span className="error">Service is required</span>
                  )}
                </div>
                <div class="form-group">
                  <textarea
                    className="form-control"
                    name="details"
                    id="details"
                    ref={register({ required: true })}
                    placeholder="Project details"
                    cols="30"
                    rows="10"
                  />
                  {errors.name && (
                    <span className="error">Details is required</span>
                  )}
                </div>
                <div class="form-row">
                  <div class="col">
                    <input
                      className="form-control"
                      name="price"
                      id="price"
                      ref={register({ required: true })}
                      placeholder="Price"
                    />
                    {errors.name && (
                      <span className="error">Price is required</span>
                    )}
                  </div>
                  <div class="col">
                    <input
                      onChange={handleFileChange}
                      type="file"
                      id="file"
                      class="form-control-file"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
            <div className="text-left mt-3">
              <button type="submit" class="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
