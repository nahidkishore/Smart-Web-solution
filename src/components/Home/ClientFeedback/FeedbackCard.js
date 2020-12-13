import React from "react";
import "./ClientFeedback.css";

const FeedbackCard = ({ feedback }) => {
  //console.log(feedback);
  return (
    <div className="col-md-4 text-center my-5">
      <div className="card d-flex align-items-center shadow">
        <img
          src={feedback.img}
          alt=""
          className="img-fluid pt-2"
          width="20%"
        />
        <div>
          <h4>{feedback.name}</h4>
          <p>{feedback.Designation}</p>
        </div>

        <div className="card-body">
          <p className="text-secondary">{feedback.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
