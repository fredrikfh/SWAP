import { initializeApp } from "firebase/app";
import { setDoc, doc, getDoc, getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAYYC1bYILp1jZnxE_QgAxfMbfJ8WTBMYg",
	authDomain: "swap-93d9f.firebaseapp.com",
	databaseURL: "https://swap-93d9f-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "swap-93d9f",
	storageBucket: "swap-93d9f.appspot.com",
	messagingSenderId: "371301076665",
	appId: "1:371301076665:web:bd7dc9043536ed1b3bd568",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

export const createUserDocument = async (user, { newName, newTlfNr }) => {
	if (!user) return;

	const uid = user.uid;
	console.log(uid);

	console.log("Ja");

	const userRef = doc(db, `users/${user.uid}`);

	const snapshot = await getDoc(userRef);

	// console.log(snapshot);

	if (snapshot.exists) {
		// const { email } = user;
		// const { displayName } = additionalData;
		console.log("Hei");

		try {
			console.log("Inne i try");
			await setDoc(doc(db, "users", uid), {
				username: newName,
				email: user.email,
				tlfNr: newTlfNr,
			});
		} catch (error) {
			console.log(error);
		}
	}
};
