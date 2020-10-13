import React from "react";
import "./ClientFeedback.css";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="card shadow-sm text-center">
      <div className="card-header d-flex align-items-center">
        <img
          src={feedback.img}
          alt=""
          className="img-fluid text-center mx-3"
          width="80"
        />
        <div>
          <h4>{feedback.name}</h4>
          <p>{feedback.designation}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="card-description">{feedback.description}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
