import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
	apiKey: "AIzaSyAYYC1bYILp1jZnxE_QgAxfMbfJ8WTBMYg",
	authDomain: "swap-93d9f.firebaseapp.com",
	databaseURL: "https://swap-93d9f-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "swap-93d9f",
	storageBucket: "swap-93d9f.appspot.com",
	messagingSenderId: "371301076665",
	appId: "1:371301076665:web:bd7dc9043536ed1b3bd568"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };