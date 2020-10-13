import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedbackCard from './FeedbackCard';

const feedbackData=[
  {
    name: 'Nash Patrik',
    designation:'CEO, Manpol',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis doloremque repellendus suscipit natus accusamus?',
    img:customer1
  },
  {
    name: 'Miriam Barron',
    designation:'CEO, Manpol',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis doloremque repellendus suscipit natus accusamus?',
    img:customer2
  },
  {
    name: 'Bria Malone',
    designation:'CEO, Manpol',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis doloremque repellendus suscipit natus accusamus?',
    img:customer3
  },
]
const ClientFeedback = () => {
  return (
    <section className="feedback mt-5">
      <div className="container text-center">
        <div className="section-header">
          <h2>Clients <span className="text-brand">Feedback</span></h2>
        </div>

        <div className="card-deck mt-5 ">
          {
            feedbackData.map(feedback=><FeedbackCard feedback={feedback}></FeedbackCard>)
          }
        </div>
      </div>
     
    </section>
  );
};

export default ClientFeedback;