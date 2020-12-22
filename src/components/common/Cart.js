import React from "react";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { ToggleCart } from "../../redux/cart/cart.actions";

const Cart = ({ toggleCart }) => {
	return (
		<div className="cart-icon" onClick={toggleCart}>
			<CartIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCart: () => dispatch(ToggleCart()),
});

export default connect(null, mapDispatchToProps)(Cart);
