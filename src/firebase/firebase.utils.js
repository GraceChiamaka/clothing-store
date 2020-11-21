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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
