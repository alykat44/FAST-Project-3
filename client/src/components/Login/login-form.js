import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            role: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/login', {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username,
                        role: response.data.role
                    })
                    console.log(response.data.role)
                    if (response.data.role.indexOf("Administrator") > -1) {
                        // update the state to redirect to correct Admin page
                        this.setState({
                            redirectTo: '/dispatch'
                        })
                    } else {
                        this.setState({
                            redirectTo: '/customer'
                        })
                    }
                }

            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="login">
                    <h1>Login</h1>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="login-box">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="window">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="password-box">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="window">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm