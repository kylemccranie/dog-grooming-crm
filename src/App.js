import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/register.component";
import Navbar from "./components/navbar.component";



function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path = "/" component = {Register}/>
      </div>
    </Router>
  );
}

export default App;
