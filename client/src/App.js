import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customer  from "./pages/Customer";
// import { Dispatch } from "./pages/Dispatch";
// import { Map } from "./pages/Map";


import React, { Component } from 'react';


import './App.css';

const App = () => {


  return (


  < div >
    <Router>


      <Switch>
        <Route exact path="/" component={Customer} />
        {/* <Route exact path="/dispatch" component={Dispatch} />
            <Route exact path="/map" component={Map} /> */}
      </Switch>

    </Router>



  </div >
  )


}

export default App;


