import React from 'react';
import Client from '../Client/Client';

import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
  return (
    <div className="header-container mb-5">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
       <Client></Client>
     
    </div>
  );
};

export default Header;