import React, { Component } from 'react';
// import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import Card from './components/Card';
import CardBtn from './components/CardBtn';
import Hero from './components/Hero';
import Geolocated from './components/Geolocation';

import './App.css';

class App extends Component {



  render() {
    return (
      <div>
        <Navbar />
        <Form />
        <Wrapper />
        <Geolocated />
      

   
      </div>


    );
  }
}

export default App;
