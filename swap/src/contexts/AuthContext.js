/* 
This is a context wrapped around all the pages so that the authentication is passed on to all the components/pages.
You shoud check out how context in react works to understand this better.
*/
import firebase from "firebase/app";
import React, { useContext, useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getAuth, signInWithEmailAndPassword, User, UserCredential } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}
export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const auth = getAuth();
	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				setCurrentUser(user);
				setLoading(false);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("errorCode: " + errorCode, "errorMessage: " + errorMessage);
			});
	}

	function logout() {
		clearSessionStorage();
		return auth.signOut();
	}

	function clearSessionStorage() {
		sessionStorage.clear();
	}

	// TODO signup

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	useEffect(() => {
		if (currentUser) {
			setLoading(false);
		}
	}, [currentUser]);

	const value = {
		currentUser,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{loading ? <LoadingAuthIndicator /> : children}
		</AuthContext.Provider>
	);
}
function LoadingAuthIndicator() {
	return (
		<Box sx={{ display: "flex" }}>
			<CircularProgress />
		</Box>
	);
}
