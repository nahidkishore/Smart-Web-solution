import React from "react";
import frame from "../../../images/logos/Frame.png";

const HeaderMain = () => {
  return (
    <section className="header-bg">
      <div className="container layout">
      <div className="row d-flex align-items-center mb-5">
        <div className="col-md-5 col-12 col-sm-6">
        <h1>
              Lets Grow Your  Brand To The Next Level
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
        <div className="col-md-7 col-sm-6">
          <img src={frame} alt="" className="img-fluid w-100" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeaderMain;
