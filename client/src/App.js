import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customer from "./pages/Customer";
import Dispatch from "./pages/Dispatch";
import Login from "./pages/Login";
// import { Map } from "./pages/Map";


import React from 'react';

// import Header from './components/Header';
// import Wrapper from './components/Wrapper';
// import Navbar from './components/Navbar';
// import Form from './components/Form';
// import Alert from './components/Alert';
// import Card from './components/Card';
// import CardBtn from './components/CardBtn';
// import Hero from './components/Hero';
// import Geolocated from './components/Geolocation';


import './App.css';

const App = () => {


  return (


<<<<<<< HEAD
  <div>
    <Router>
=======
    < div >
      <Router>
>>>>>>> 1015e6b4e5a44c36cb237f022c8599c13a9d9a50


        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/dispatch" component={Dispatch} />
          {/* <Route exact path="/map" component={Map} /> */}
        </Switch>

      </Router>



<<<<<<< HEAD
</div>
=======
    </ div>

  )
>>>>>>> 1015e6b4e5a44c36cb237f022c8599c13a9d9a50

}

export default App;

