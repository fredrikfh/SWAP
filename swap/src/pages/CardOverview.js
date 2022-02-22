import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import FilterMenu from "../components/FilterMenu";

import AdCard from "../components/AdCard";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function CardOverview() {
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, "posts");
	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getPosts();
	}, []);

	return (
		/*Hoved-Container*/
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginLeft: "4em",
				paddingLeft: "0 !important",
				width: "600px",
			}}
		>
			<FilterMenu />
			{/*Annonseliste-Container*/}
			<Container
				sx={{
					height: "calc(100vh - 300px)",
					paddingLeft: "0 !important",
					paddingRight: "0 !important",
					overflowY: "scroll",
					"&::-webkit-scrollbar": {
						width: 7,
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: "rgb(240,240,240)",
						borderRadius: "5px",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "rgb(225,225,225)",
						borderRadius: "5px",
					},
				}}
			>
				<div className="adCards">
					{posts.map((post, index) => {
						return (
							<AdCard
								key={index}
								post={post}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "calc(100% - 3em)",
									height: "12em",
									margin: "1em auto 0 auto",
									background: "white",
								}}
							></AdCard>
						);
					})}
				</div>
				<Card
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "calc(100% - 3em)",
						height: "12em",
						margin: "1em auto 0 auto",
						background: "white",
					}}
				>
					<h2>Her kommer kort-komponenten</h2>
				</Card>
				<Card
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "calc(100% - 3em)",
						height: "12em",
						margin: "1em auto 0 auto",
						background: "white",
					}}
				>
					<h2>Her kommer kort-komponenten</h2>
				</Card>
			</Container>
		</Container>
	);
}
