import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<Button variant="outline">Go to Checkout</Button>
		</div>
	);
};
const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
export default connect(mapStateToProps)(CartDropdown);
