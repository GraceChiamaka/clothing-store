import React from "react";
import { connect } from "react-redux";
import { AddItemToCart } from "../../redux/cart/cart.actions";
import Button from "./Button";

const CollectionItem = ({ item, addItem }) => {
	const { id, name, price, imageUrl } = item;
	return (
		<div className="collection-item" key={item.id}>
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button variant="default" inverted onClick={() => addItem(item)}>
				Add to Cart
			</Button>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(AddItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
