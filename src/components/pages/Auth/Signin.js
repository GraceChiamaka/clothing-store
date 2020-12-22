import React, { Component } from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { signInWithGoogle } from "../../../firebase/firebase.utils";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
	};

	handleLogin = (ev) => {
		ev.preventDefault();
	};
	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	// const handleGoogleSignIn = () => {
	// 	console.log("google auth");
	// 	signInWithGoogle();
	// };
	render() {
		return (
			<div className="signin-content">
				<div className="heading">
					<p>Enter your login details to continue</p>

					<Button
						variant="outline"
						className="google-btn"
						type="button"
						title="Sign In with Google"
						block
						onClick={signInWithGoogle}
					/>
					<form onSubmit={this.handleLogin}>
						<Input
							type="email"
							name="email"
							label="Email Address"
							inputClass="signin-input"
							onChange={this.handleInput}
							value={this.state.email}
						/>
						<Input
							type="password"
							label="Password"
							name="password"
							inputClass="signin-input"
							onChange={this.handleInput}
							value={this.state.password}
						/>
						<Button title="Log In" variant="default" type="submit" block />
					</form>
				</div>
			</div>
		);
	}
}

export default SignIn;
