import React, { Component } from 'react';

import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.css';

class App extends Component {



  render() {
    return (
      <div>
        <Navbar />
        <Form />
        <Wrapper />

      </div>


    );
  }
}

export default App;

// const App = () => (

//   <div>
//     <Navbar />
//   </div>
// )
