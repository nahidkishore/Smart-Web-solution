import React from "react";
import frame from "../../../images/logos/Frame.png";
const HeaderMain = () => {
  return (
    <main className="row d-flex align-items-center mb-5">
      <div className="col-md-4 offset-md-1">
        <h1>
          Lets Grow Your <br /> Brand To The <br /> Next Level
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          eveniet, pariatur aliquid voluptates laudantium laborum.
        </p>
        <button className="button">Hire Us</button>
      </div>
      <div className="col-md-5 offset-md-1">
        <img src={frame} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
