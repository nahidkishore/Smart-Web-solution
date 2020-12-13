import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { serviceName } = useParams();

  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
const history = useHistory();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("title", data.title);
    formData.append("details", data.details);
    formData.append("price", data.price);
    fetch("https://secure-fortress-41944.herokuapp.com/addOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Order data added successfully");
          
          history.push("/dashboard/orderedList");
          Reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(onSubmit);

  const Reset = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("title").value = "";
    document.getElementById("details").value = "";
    document.getElementById("price").value = "";
    document.getElementById("file").value = "";
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 mt-3">
          <div className="row">
            <div className="col-md-7 mb-3 ml-5 mt-3">
              <h4 style={{ fontWeight: "bold" }}> Order</h4>
            </div>
            <div className="col-md-4 mt-3">
              <h5 style={{ fontWeight: "bolder" }}>{loggedInUser.name}</h5>
            </div>
          </div>
          <div className="service-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-7 col-lg-7 col-sm-12">
                  <div className="form-group">
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
                </div>
                <div className="col-md-7 col-lg-7 col-sm-12">
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
                </div>
                <div className="col-md-7 col-lg-7 col-sm-12">
                  <div class="form-group">
                    <input
                      className="form-control"
                      name="title"
                      id="title"
                      defaultValue={serviceName}
                      ref={register({ required: true })}
                      placeholder="title"
                    />
                    {errors.name && (
                      <span className="error">Service is required</span>
                    )}
                  </div>
                </div>
                <div className="col-md-7 col-lg-7 col-sm-12">
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
                </div>
                <div className="col-md-7 col-lg-7 col-sm-12">
                  <div class="form-row">
                    <div class="col-md-3">
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
                    <div class="col-md-3">
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

                <div className="col-md-7 col-lg-7 col-sm-12">
                  <div style={{ textAlign: "left" }} className="text-left mt-3">
                    <button type="submit" class="btn btn-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
