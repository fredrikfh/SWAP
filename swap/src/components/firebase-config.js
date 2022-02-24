import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC3Z1mlcQ8ZZapbdjNHdVmxCIlbEiwViIE",
	authDomain: "swap-108f3.firebaseapp.com",
	projectId: "swap-108f3",
	storageBucket: "swap-108f3.appspot.com",
	messagingSenderId: "499829249142",
	appId: "1:499829249142:web:d41214560f1098204d7b57",
	measurementId: "G-BRC0KNK4PJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
