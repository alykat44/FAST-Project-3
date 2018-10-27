import React, { Component } from 'react'
import axios from 'axios'


class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			role: '',
			confirmPassword: ''


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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			role: this.state.role
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')

				} else {
					console.log('username already taken')
					this.setState({
						redirectTo: '/login'
					})
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		return (
			<div className="SignupForm">
				<h1>Sign up</h1>
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
					<div className="form-group">
						<div className="password-box">
							<label className="form-label" htmlFor="admin-or-user">User or Admin: </label>
						</div>
						<div className="window">
							<select
								className="form-control"
								id="options"
								name="role"
								value={this.state.role}
								onChange={this.handleChange}
							>
								<option>Which App do you need? (Select One)</option>
								<option>User</option>
								<option>Administrator</option>
							</select>
						</div>
					</div>
					<div className="form-group ">
						<div className="col-7"></div>
						<button
							className="btn btn-primary"
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</div>
				</form>
			</div>

		)
	}
}

export default Signup