import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import "./OrderReview.css";
import { CircularProgress } from "@material-ui/core";

const OrderReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderedList, setOrderedList] = useState([]);

  useEffect(() => {
    fetch(
      "https://secure-fortress-41944.herokuapp.com/orderedList?email=" +
        loggedInUser.email
    )
      .then((response) => response.json())
      .then((data) => setOrderedList(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-9">
          <div className="row">
            <div className="col-md-7 mb-3 ml-5 mt-3">
              <h4 style={{ fontWeight: "bold" }}> Order List</h4>
            </div>
            <div className="col-md-4 mt-3">
              <h5 style={{ fontWeight: "bolder" }}>{loggedInUser.name}</h5>
            </div>
          </div>

          <div className="services-container">
            <div className="d-flex justify-content-center">
              <div className="row w-75 mt-5 ">
                {orderedList.length === 0 && <CircularProgress />}

                {orderedList.map((list) => (
                  <div className="col-md-4 text-center my-5">
                    <div className="card d-flex align-items-center shadow">
                      <div className="d-flex justify-content-between">
                        <img
                          className="mx-3 rounded-circle"
                          style={{ height: "50px" }}
                          src={`data:image/png;base64,${list.image.img}`}
                          alt="img"
                        />
                        <button className="btn btn-danger btn-sm">
                          Pending
                        </button>
                      </div>
                      <div className="card-body">
                        <h5 className="mt-3 mb-3">{list.service}</h5>
                        <p className="text-secondary">{list.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderReview;
