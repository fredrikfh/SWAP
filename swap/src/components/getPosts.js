import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const getPosts = () => {
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, "posts");
	useEffect(() => {
		const getPosts = async () => {
			const q = query(postsCollectionRef, orderBy("createdAt", "desc"));
			const data = await getDocs(q);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getPosts();
	}, []);

	return posts;
};

export default getPosts;
