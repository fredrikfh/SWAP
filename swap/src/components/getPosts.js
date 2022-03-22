import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

const getPosts = () => {
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, "posts");
	useEffect(() => {
		const getPosts = async () => {
			const q = query(postsCollectionRef, where("active", "==", true), orderBy("createdAt", "desc"));
			const data = await getDocs(q);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getPosts();
	}, []);

	return posts;
};

const getInactivePosts = () => {
	const [inactivePosts, setInactivePosts] = useState([]);
	const inactivePostsCollectionRef = collection(db, "posts");
	useEffect(() => {
		const getInactivePosts = async () => {
			const q = query(inactivePostsCollectionRef, where("active", "==", false), orderBy("createdAt", "desc"));
			const data = await getDocs(q);
			setInactivePosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getInactivePosts();
	}, []);

	return inactivePosts;
}

export { getPosts, getInactivePosts };
