import "./style/styles.css";
import React from "react" ; /*{ useState, useEffect }*/
import Navbar from './components/Navbar'
import CardOverview from './pages/CardOverview'
/*import AdCard from "./components/AdCard";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";*/

function App() {
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
	)
}

export default App;
