import React, { useContext, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import logo from "../../../images/logos/logo.png";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const [admin,setAdmin]=useState(null);


const handleChange = (e) => {
  setAdmin({ [e.target.name]: e.target.value });
};

  const onSubmit = (data) => {
 
    fetch("http://localhost:5000/addAdmin", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(admin)
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("admin added successfully");
          document.getElementById("email").value = "";
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
        <div className="col-md-8  admin-Form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div class="form-group">
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  ref={register({ required: true })}
                  placeholder="nahid@gmail.com"
                  onChange={handleChange} 
                />
                {errors.name && <span className="error">Name is required</span>}
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
