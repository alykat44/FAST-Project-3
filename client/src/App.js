import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customer from "./pages/Customer";
import Dispatch from "./pages/Dispatch";
// import Login from "./pages/Login";
import axios from 'axios';
import React, { Component } from 'react';

import Signup from './components/Login/sign-up';
import LoginForm from './components/Login/login-form';
import LoginNav from './components/LoginNav';
import Home from './components/Login/home';


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
    .catch(error => {
      console.log(error.response)
    
  });
}

  render() {

    return (
      <div className="App">

        <LoginNav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        
       




        <Router>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
            <Route path="/signup" render={() => <Signup />} />
            {/* <Route exact path="/" component={Login} /> */}
            <Route path="/customer" component={Customer} />
            <Route path="/dispatch" component={Dispatch} />
            {/* <Route exact path="/map" component={Map} /> */}
          </Switch>
        </Router>




      </div>
    );
  }
}

export default App;

