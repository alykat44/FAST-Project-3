import React, { Component } from "react";
import "./LoginNav.css";

class LoginNav extends Component {
  render() {
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4" id="navanchors">
            <div class="row">
              <div class="column-1-6">
                <div className="nav-item dropdown dropright" id="nav-anchors">
                  <a
                    className="nav-link dropdown-toggle"
                    id="nav-home"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Customer
                  </a>
                  <div className="dropdown-menu" id="login-menu">
                    <form className="px-4 py-3">
                      <div className="form-group">
                        <label
                          htmlFor="userNameDropDownForm"
                          id="label-user-form"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="userNameField"
                          placeholder="user name"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="passwordDropDownForm"
                          id="label-user-form"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="passwordField"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="dropdownCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="dropdownCheck"
                          id="label-user-form"
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="user-btn"
                      >
                        Sign in
                      </button>
                    </form>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="">
                      New around here? Sign up
                    </a>
                    <a className="dropdown-item" href="">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
              <div class="column-2-6">
                <div className="nav-item dropdown dropright">
                  <a
                    className="nav-link dropdown-toggle"
                    id="nav-home"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dispatch
                  </a>
                  <div className="dropdown-menu" id="login-menu">
                    <form className="px-4 py-3">
                      <div className="form-group">
                        <label
                          htmlFor="userNameDropDownForm"
                          id="label-user-form"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="userNameField"
                          placeholder="user name"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="passwordDropDownForm"
                          id="label-user-form"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="passwordField"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="dropdownCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="dropdownCheck"
                          id="label-user-form"
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="user-btn"
                      >
                        Sign in
                      </button>
                    </form>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="">
                      New around here? Sign up
                    </a>
                    <a className="dropdown-item" href="">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <a className="text-white h4" href="/customer">
                  Customer
                </a>
                <a className="text-white h4" href="/dispatch">
                  Dispatch
                </a>
              </div>
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
    );
  }
}

export default LoginNav;

// <a className="text-white h4" href="/towing">TOWING</a>
// <a className="text-white h4" href="/gas">NEED GAS</a>
// <a className="text-white h4" href="/jumpstart">NEED A JUMPSTART</a>
// <a className="text-white h4" href="/unlock">UNLOCK VEHICLE</a>
// <a className="text-white h4" href="/tire">CHANGE A TIRE</a>
