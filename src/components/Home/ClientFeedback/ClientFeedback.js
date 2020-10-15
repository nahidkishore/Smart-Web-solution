import React, { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { CircularProgress } from "@material-ui/core";

const ClientFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("https://secure-fortress-41944.herokuapp.com/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  
  return (
    <section className="service mt-5">
      <h1 className="text-center">
        Clients <span className="text-brand">Feedback </span>
      </h1>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 ">
        {feedbacks.length === 0 && <CircularProgress />}
          {feedbacks.map((feedback) => (
            <FeedbackCard feedback={feedback} key={feedback._id}></FeedbackCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
