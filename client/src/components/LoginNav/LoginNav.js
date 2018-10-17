import React, { Component } from "react";
import "./LoginNav.css";
import { Link } from 'react-router-dom';
import axios from 'axios';


class LoginNav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this);
    this.customer = this.customer.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.home = this.home.bind(this);
    

  }

  logout(event) {
    event.preventDefault()
    window.location = '/';
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  customer(event) {
    event.preventDefault();
    window.location = '/customer';
  }

  dispatch(event) {
    event.preventDefault();
    window.location = '/dispatch';
  }

  login(event) {
    event.preventDefault();
    window.location = '/login';
  }

  signup(event) {
    event.preventDefault();
    window.location = '/signup';
  }

  home(event) {
    event.preventDefault();
    window.location = '/';
  }



  render() {

    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div>

        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4" id="navanchors">
              <div className="column-4" id="nav-container">
                {loggedIn ? (
                  <section className="navbar-section">
                    <Link to="/" className="btn btn-link text-secondary" onClick={this.logout}>
                      <span className="text-secondary">logout</span></Link>
                    <Link to="/customer" className="btn btn-link text-secondary" onClick={this.customer}>
                      <span className="text-secondary" >Customer</span>
                    </Link>
                    <Link to="/dispatch" className="btn btn-link text-secondary" onClick={this.dispatch}>
                      <span className="text-secondary">Dispatch</span>
                    </Link>
                  </section>
                ) : (
                    <section className="navbar-section">
                      <Link to="/" className="btn btn-link text-secondary" onClick={this.home} >
                        <span className="text-secondary">Home</span>
                      </Link>
                      <Link to="/login" className="btn btn-link text-secondary" onClick={this.login}>
                        <span className="text-secondary" href="/login">Login</span>
                      </Link>
                      <Link to="/signup" className="btn btn-link" onClick={this.signup} >
                        <span className="text-secondary">Sign Up</span>
                      </Link>
                    </section>
                  )}
              </div>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              id="navbtn"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <p>Click on Fred Sanford to Sign Up or Login!!</p>

            <h1 className="text" id="title">
              FAST
          </h1>
          </nav>
        </div>
      </div>
    );
  };
};

export default LoginNav;

