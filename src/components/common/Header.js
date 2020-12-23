import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import Button from "./Button";
import CartIcon from "./Cart";
import CartDropdown from "./CartDropdown";

const Header = ({ currentUser, hidden }) => {
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
				{currentUser !== null ? (
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
				<CartIcon />
			</div>
			{hidden && <CartDropdown />}
		</div>
	);
};

export const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
