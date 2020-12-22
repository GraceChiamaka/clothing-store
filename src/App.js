import React, { Component } from "react";
import { connect } from "react-redux";
import { auth, createUser } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import Routes from "./routes";

class App extends Component {
	state = {
		currentUser: null,
	};
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.handleAuth();
	}

	handleAuth = async (user) => {
		console.log(user, "user");
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			console.log(userAuth?.providerData[0], "context api", userAuth);
			if (userAuth) {
				const userRef = await createUser(userAuth);
				console.log(userRef, "ref");
				// userRef.onSnapshot((snapshot) => {
				// 	console.log(snapshot, "snaps");
				// 	setCurrentUser({
				// 		id: snapshot.id,
				// 		...snapshot.data(),
				// 	});
				// });
			}
			this.setState({ currentUser: null });
		});
	};
	render() {
		return <Routes user={this.state.currentUser} />;
	}
}
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
