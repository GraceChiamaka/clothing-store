import React from "react";
import Button from "./Button";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items"></div>
			<Button variant="outline">Go to Checkout</Button>
		</div>
	);
};

export default CartDropdown;
