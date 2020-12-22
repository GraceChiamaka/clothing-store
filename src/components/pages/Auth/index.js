import React, { useState } from "react";
import { Tabs, Tab } from "../../common/Tabs";
import Register from "./Register";
import SignIn from "./Signin";

const ContactPage = () => {
	const tabParam = "signin";
	return (
		<div className="contact-container">
			<Tabs tabHeaderClass="auth-tab" defaultTab={tabParam}>
				<Tab label={"signin"} tabName={"LOG IN"}>
					<SignIn />
				</Tab>
				<Tab label={"register"} tabName={"CREATE ACCOUNT"}>
					<Register />
				</Tab>
			</Tabs>
		</div>
	);
};

export default ContactPage;
