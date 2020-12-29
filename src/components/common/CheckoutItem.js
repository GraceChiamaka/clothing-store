import React from "react";
import { connect } from "react-redux";
import {
	ClearItemFromCart,
	RemoveItem,
	AddItemToCart,
} from "../../redux/cart/cart.actions";
import { addItemToCart } from "../../redux/cart/cart.utils";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<span className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</span>
				<span className="value">{quantity}</span>
				<span className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</span>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(ClearItemFromCart(item)),
	addItem: (item) => dispatch(AddItemToCart(item)),
	removeItem: (item) => dispatch(RemoveItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
