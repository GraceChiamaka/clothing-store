import React, { useState, createContext, useEffect } from "react";
import { auth } from "../firebase/firebase.utils";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	let unsubscribeFromAuth = null;

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			console.log(user, "user");
			setCurrentUser(user);
		});
		// effect;
		// return () => {
		// 	cleanup;
		// };
	}, []);
	return (
		<AppContext.Provider value={{ currentUser }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
