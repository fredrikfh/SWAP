import { initializeApp } from "firebase/app";
import { setDoc, addDoc, doc, getDoc, getFirestore } from "@firebase/firestore";
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

export const createUserDocument = async (user, { newName, newLocation }) => {
	if (!user) return;
	const uid = user.uid;
	const userRef = doc(db, `users/${user.uid}`);
	const snapshot = await getDoc(userRef);
	if (snapshot.exists) {
		// const { email } = user;
		// const { displayName } = additionalData;
		console.log("Hei");

		try {
			console.log("Inne i try");
			await setDoc(doc(db, "users", uid), {
				username: newName,
				email: user.email,
				location: newLocation,
			});
		} catch (error) {
			console.log(error);
		}
	}
};

export const createReviewDocument = async (user, { reviewerId, sellerId, stars }) => {
	if (!user) return;

	const uid = user.uid;
	const userRef = doc(db, `reviews/${user.uid}`);
	const snapshot = await getDoc(userRef);

	if (snapshot.exists) {
		try {
			await addDoc(doc(db, "reviews"), {
				reviewerId: uid,
				stars: stars,
				sellerId: sellerId,
			});
		} catch (error) {
			console.log(error);
		}
	}
};
