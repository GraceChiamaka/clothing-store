import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import Button from "./Button";
export interface HeaderProps {
	user: {
		displayName: string;
	};
}

const Header = ({ user }: HeaderProps) => {
	const handleLogOut = () => {
		auth.signOut();
	};
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{user !== null ? (
					<div className="option">
						<Button
							type="button"
							variant="default"
							title="Sign OUt"
							onClick={handleLogOut}
						/>{" "}
					</div>
				) : (
					<Link className="option" to="/contact">
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
