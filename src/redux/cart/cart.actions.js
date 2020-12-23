import { CartTypes } from "./cart.types";

export const ToggleCart = () => ({
	type: CartTypes.TOGGLE_CART,
});

export const AddItemToCart = (item) => ({
	type: CartTypes.ADD_ITEM_TO_CART,
	payload: item,
});
