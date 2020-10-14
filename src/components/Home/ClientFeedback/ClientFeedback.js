import React, { useEffect, useState } from "react";
import customer1 from "../../../images/customer-1.png";
import customer2 from "../../../images/customer-2.png";
import customer3 from "../../../images/customer-3.png";
import FeedbackCard from "./FeedbackCard";

/* const feedbackData = [
  {
    name: "Nash Patrik",
    designation: "CEO, Manpol",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis doloremque repellendus suscipit natus accusamus?",
    img: customer1,
  },
  {
    name: "Miriam Barron",
    designation: "CEO, Manpol",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis doloremque repellendus suscipit natus accusamus?",
    img: customer2,
  },
  {
    name: "Bria Malone",
    designation: "CEO, Manpol",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis doloremque repellendus suscipit natus accusamus?",
    img: customer3,
  },
]; */
const ClientFeedback = () => {
  const [feedbacks,setFeedbacks] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/feedback')
    .then(res=>res.json())
    .then(data=>setFeedbacks(data))

  },[]);
  return (
    <section className="service mt-5">
      <h1 className="text-center">
      
        Clients <span className="text-brand">Feedback </span>
      </h1>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 ">
          {feedbacks.map((feedback) => (
            <FeedbackCard feedback={feedback} key={feedback._id}></FeedbackCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
