import React from "react";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";
const Client = () => {
  return (
    <section className="d-flex justify-content-center mb-5">
      <div className="row mt-5 w-75 ">
        <div className="col-md-2 offset-md-1 text-center">
          <img src="https://iili.io/3HsscB.png" alt="" className="img-fluid" />
        </div>
        <div className="col-md-2">
          <img
            src="https://iili.io/3HstAF.png"
            alt=""
            className="img-fluid text-center"
          />
        </div>
        <div className="col-md-2">
          <img
            src="https://iili.io/3HsZ91.png"
            alt=""
            className="img-fluid text-center"
          />
        </div>
        <div className="col-md-2">
          <img
            src="https://iili.io/3HsiFV.png"
            alt=""
            className="img-fluid text-center"
          />
        </div>
        <div className="col-md-2">
          <img
            src="https://iili.io/3HsL8P.png"
            alt=""
            className="img-fluid text-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Client;
