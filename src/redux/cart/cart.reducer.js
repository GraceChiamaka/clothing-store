import { CartTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
const INITIAL_STATE = { hidden: false, cartItems: [] };

const CartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartTypes.TOGGLE_CART:
			return { ...state, hidden: !state.hidden };
		case CartTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item.id !== action.payload),
			};
		case CartTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};
export default CartReducer;
