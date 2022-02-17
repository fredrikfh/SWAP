import React from "react";
import Navbar from "./components/Navbar";
import CardOverview from "./pages/CardOverview";

export default function App() {
	/*const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, "posts");
	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getPosts();
	}, []);
	return (
		<div>
			<div className="App">
				{" "}
				{posts.map((post, index) => {
					return <AdCard key={index} post={post}></AdCard>;
				})}
			</div>
		</div>
	);*/

	return (
		<React.Fragment>
			<Navbar />
			<CardOverview />
		</React.Fragment>
	);
}
