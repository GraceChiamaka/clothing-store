import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firestore = firebase.firestore();
firestore.collection("users").doc("user_id");
