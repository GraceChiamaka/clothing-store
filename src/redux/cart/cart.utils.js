export const addItemToCart = (cartItems, newItem) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === newItem.id
	);
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === newItem.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
	const existingCartItem = cartItems.find(
		(item) => item.id === cartItemsToRemove
	);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemsToRemove.id
			? { ...cartItems, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
