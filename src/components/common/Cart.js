import React from "react";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ToggleCart } from "../../redux/cart/cart.actions";

const Cart = ({ toggleCart, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCart}>
			<CartIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCart: () => dispatch(ToggleCart()),
});
const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
