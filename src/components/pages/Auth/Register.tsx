import React from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";

interface RegisterProps {}

const Register = () => {
	const handleRegister = () => {};
	const handleEmailInput = (e: any) => {};
	return (
		<div className="register">
			<div className="signin-content">
				<div className="heading">
					<p>Fill the form to create an account</p>
					<form action="" onSubmit={handleRegister}>
						<Input
							type="text"
							label="Full Name"
							inputClass="signin-input"
							onChange={handleEmailInput}
						/>
						<Input
							type="email"
							label="Email Address"
							inputClass="signin-input"
							onChange={handleEmailInput}
						/>
						<Input
							type="text"
							label="Username"
							inputClass="signin-input"
							onChange={handleEmailInput}
						/>
						<Input
							type="password"
							label="Password"
							inputClass="signin-input"
							onChange={handleEmailInput}
						/>
						<Input
							type="password"
							label="Confirm Password"
							inputClass="signin-input"
							onChange={handleEmailInput}
						/>
						<Button
							title="Create Account"
							variant="default"
							type="submit"
							onClick={handleRegister}
							block
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
