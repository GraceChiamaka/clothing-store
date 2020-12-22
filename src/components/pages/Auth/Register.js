import React, { Component } from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { auth, createUser } from "../../../firebase/firebase.utils";

class Register extends Component {
	state = {
		fullName: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	};
	handleRegister = async (e) => {
		e.preventDefault();
		const { fullName, email, password, username, confirmPassword } = e.target;
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUser(user, { username });
			this.setState({
				fullName: "",
				email: "",
				username: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.log(error);
		}
	};
	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<div className="register">
				<div className="signin-content">
					<div className="heading">
						<p>Fill the form to create an account</p>
						<form onSubmit={this.handleRegister}>
							<Input
								type="text"
								label="Full Name"
								name="fullName"
								inputClass="signin-input"
								onChange={this.handleInput}
							/>
							<Input
								type="email"
								label="Email Address"
								inputClass="signin-input"
								name="email"
								onChange={this.handleInput}
							/>
							<Input
								type="text"
								label="Username"
								inputClass="signin-input"
								onChange={this.handleInput}
								name="username"
							/>
							<Input
								type="password"
								label="Password"
								inputClass="signin-input"
								onChange={this.handleInput}
								name="password"
							/>
							<Input
								type="password"
								label="Confirm Password"
								inputClass="signin-input"
								onChange={this.handleInput}
								name="confirmPassword"
							/>
							<Button
								title="Create Account"
								variant="default"
								type="submit"
								block
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
