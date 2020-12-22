import React, { useContext } from "react";
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch,
	useParams,
} from "react-router-dom";
import Header from "../components/common/Header";

import ContactPage from "../components/pages/Auth";
import Homepage from "../components/pages/Homepage";
import ShopPage from "../components/pages/Shop";

const Routes = (props) => {
	return (
		<BrowserRouter>
			<Header currentUser={props.user} />
			<Switch>
				<Route exact path="/" key="homepage" component={Homepage} />,
				<Route exact path="/shop" key="shop" component={ShopPage} />,
				<Route
					exact
					path="/contact"
					key="contact"
					render={() =>
						props.user ? <Redirect to="/shop" /> : <ContactPage />
					}
				/>
				,
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
