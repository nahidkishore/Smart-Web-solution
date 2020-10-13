import React from 'react';
import Client from '../Client/Client';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Client></Client>
      <Services></Services>
      <Works></Works>
      <ClientFeedback></ClientFeedback>
      

     
    </div>
  );
};

export default Home;