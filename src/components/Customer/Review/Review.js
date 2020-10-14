import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ReviewForm from "./ReviewForm";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [reviews, setReviews] = useState({});

  const handleChange = (e) => {
    const newReview = {
      ...reviews,
      name: loggedInUser.name,
      img: loggedInUser.photoUrl,
    };
    newReview[e.target.name] = e.target.value;
    setReviews(newReview);
    /* setReviews({ ...reviews, [e.target.name]: e.target.value, name: loggedInUser.name, img: loggedInUser.photoURL }) */
  };

  const handleSubmit = (e) => {
    /* e.preventDefault(); */
    setReviews({
      ...reviews,
      name: loggedInUser.name,
      img: loggedInUser.photoURL,
    });
    fetch("http://localhost:5000/addFeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviews),
    }).then((success) => {
      if (success) {
        alert("Thank you for Your feedback");
      }
      console.log(success);
    });
  };
  return (
    <section>
      <div className=" m-2 row">
        <div className="col-md-4">
          <img src={logo} alt="" className="img-fluid" width="60%" />
        </div>
        <div className="col-md-4 d-flex justify-content-start">
          <h1>Review Form</h1>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <h2>{loggedInUser.name}</h2>
        </div>
      </div>
      <div className="container-fluid row ml-5 mt-5">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8  order-Form">
          <form onSubmit={handleSubmit}>
            <div className="form-group col-md-5 col-sm-12 col-12">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
                placeholder="Your name"
                value={loggedInUser.name}
              />
            </div>
            <div className="form-group col-md-5 col-sm-12 col-12">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
                placeholder="Designation,Company's name "
              />
            </div>

            <div className="form-group  col-md-5  col-sm-12 col-12">
              <label htmlFor="exampleInputName">Description</label>
              <textarea
                onChange={handleChange}
                type="text"
                className="form-control"
                name="description"
                placeholder="Enter description"
                cols="30"
                rows="10"
              />
            </div>

            <button type="submit" className="btn btn-success my-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
