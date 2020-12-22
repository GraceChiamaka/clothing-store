import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { auth, createUser } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import Routes from "./routes";

class App extends Component {
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
				this.props.setCurrentUser(userAuth.providerData[0]);
				// userRef.onSnapshot((snapshot) => {
				// 	console.log(snapshot, "snaps");
				// 	setCurrentUser({
				// id: snapshot.id,
				// ...snapshot.data(),
				// 	});
				// });
			}
			this.props.setCurrentUser(userAuth.providerData[0]);
		});
	};
	render() {
		return <Routes user={this.props.currentUser} />;
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
