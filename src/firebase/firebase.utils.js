import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCpBZ82MLuNkIZN5rJufph5-7qhK3yv3_E",
	authDomain: "store-db-5093e.firebaseapp.com",
	databaseURL: "https://store-db-5093e.firebaseio.com",
	projectId: "store-db-5093e",
	storageBucket: "store-db-5093e.appspot.com",
	messagingSenderId: "608484061498",
	appId: "1:608484061498:web:005955048e7b1b19b4a003",
	measurementId: "G-5YR1XNZ7LQ",
};

export const createUser = async (userAuth, data) => {
	if (userAuth) {
		const userRef = firestore.doc(`users/${userAuth.uid}`);
		const snapshot = await userRef.get();
		if (!snapshot.exists) {
			const { displayName, email } = userAuth;
			const createdAt = new Date();

			try {
				const result = await userRef.set({
					displayName,
					email,
					createdAt,
					...data,
				});
			} catch (error) {
				console.log("error creating user", error.messge);
			}
			return userRef;
		}
	} else {
		return;
	}
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
