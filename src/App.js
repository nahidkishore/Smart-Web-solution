import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Order from './components/Customer/Order/Order';

function App() {
  return (
 <Router>
   <Switch>
     <Route path="/home">
       <Home></Home>
     </Route>
     <Route exact path="/">
       <Home></Home>
     </Route>
     <Route path="/dashboard/order">
       <Order></Order>
     </Route>
   </Switch>
 </Router>
  );
}

export default App;
