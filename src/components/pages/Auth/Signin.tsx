import React, { useState } from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
export interface SignInProps {}

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {};
	const handlePasswordInput = (e: any) => setPassword(e.target.value);
	const handleEmailInput = (e: any) => setEmail(e.target.value);
	return (
		<div className="signin-content">
			<div className="heading">
				<p>Enter your login details to continue</p>
				<form action="" onSubmit={handleLogin}>
					<Input
						type="email"
						label="Email Address"
						inputClass="signin-input"
						onChange={handleEmailInput}
					/>
					<Input
						type="password"
						label="Password"
						inputClass="signin-input"
						onChange={handlePasswordInput}
					/>
					<Button title="Log In" variant="default" type="submit" block />
				</form>
			</div>
		</div>
	);
};

export default SignIn;
