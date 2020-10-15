import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import './OrderReview.css';
import { CircularProgress } from '@material-ui/core';

const OrderReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderedList, setOrderedList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orderedList?email=" + loggedInUser.email)
      .then((response) => response.json())
      .then((data) => setOrderedList(data))
      .catch((err) => console.log(err));
  }, []);
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
    <h1 className="text-center">
      
      Order <span className="text-brand">List</span>
    </h1>
    <div className="d-flex justify-content-center">
      <div lassName="row w-75 mt-5 ">

      {
            orderedList.length ===0 && <CircularProgress/>
          }

        {orderedList.map((list) => (
          <div className="col-md-4 my-5">
            <div  className="card d-flex align-items-center shadow">
              <div className="d-flex justify-content-between">
                <img
                  className="mx-3 rounded-circle"
                  style={{ height: "50px" }}
                  src={`data:image/png;base64,${list.image.img}`}
                  alt="img"
                />
                <button className="btn btn-danger btn-sm">Pending</button>
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
    </section>
  );
};

export default OrderReview;
