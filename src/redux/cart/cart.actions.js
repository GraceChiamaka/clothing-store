import { CartTypes } from "./cart.types";

export const ToggleCart = () => ({
	type: CartTypes.TOGGLE_CART,
});

export const AddItemToCart = (item) => ({
	type: CartTypes.ADD_ITEM_TO_CART,
	payload: item,
});

export const ClearItemFromCart = (item) => ({
	type: CartTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});
export const RemoveItem = (item) => ({
	type: CartTypes.REMOVE_ITEM,
	payload: item,
});
