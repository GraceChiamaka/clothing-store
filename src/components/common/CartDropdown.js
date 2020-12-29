import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";
import { withRouter, useHistory } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { ToggleCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems, history, dispatch }) => {
	// let history = useHistory();

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<Button
				variant="outline"
				onClick={() => {
					history.replace("/checkout");
					dispatch(ToggleCart());
				}}
			>
				Go to Checkout
			</Button>
		</div>
	);
};
const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
export default withRouter(connect(mapStateToProps)(CartDropdown));
