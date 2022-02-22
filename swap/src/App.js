import React from "react";
import "./style/styles.css";
import "date-fns";
import AddPost from "./components/AddPost";

function App() {
	// useEffect(() => {
	// 	const getPosts = async () => {
	// 	  const data = await getDocs(postsCollectionRef);
	// 	  setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
	// 	}

	// 	getPosts()
	// },[])

	return (
		<div className="App">
			<AddPost></AddPost>
		</div>
	);
}

export default App;
