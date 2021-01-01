import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51I4bPBGiMeulDA82SSTSTvampmJLRWW0UbYHpvYEmy7yRS2cC6TublNlqINLiAd097GsiT4uonYnB0cmvco2mFd200TvGkWVFG";

	const onToken = (token) => {
		console.log(token);
		alert("payment Successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing LTD"
			billingAddress
			shippingAddress
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripButton;
