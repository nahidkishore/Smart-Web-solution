import React from 'react';
import Client from '../Client/Client';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
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
      <Footer></Footer>
      

     
    </div>
  );
};

export default Home;