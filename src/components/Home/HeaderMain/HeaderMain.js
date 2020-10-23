import React from "react";
import frame from "../../../images/logos/Frame.png";
const HeaderMain = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center mb-5">
        <div className="col-md-5 col-12 col-sm-12">
          <div className="col-12 col-md-12 col-sm-6">
            <h1>
              Lets Grow Your <br /> Brand To The <br /> Next Level
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              eveniet, pariatur aliquid voluptates laudantium laborum.
            </p>
            <button
              type="button"
              className="button  btn btn-primary call-button"
              data-toggle="tooltip"
              data-placement="top"
              title="+8801688815749"
            >
              Hire Us
            </button>
          </div>
        </div>
        <div className="col-md-6 offset-1 ">
          <img src={frame} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
