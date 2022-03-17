import React from "react";
import AdCard from "../components/AdCard";
import Container from "@mui/material/Container";

export default function PostContainer(props) {
	return props === null ? null : (
		<Container
			sx={{
				height: "calc(100vh - 350px)",
				width: "calc(100% - 30px)",
				padding: "0 0 0 24px !important",
				marginTop: "1em",
				marginLeft: "0",
				overflowY: "scroll",
				"&::-webkit-scrollbar": {
					width: "6px",
				},
				"&:hover": {
					"&::-webkit-scrollbar-track": {
						backgroundColor: "rgb(0,0,0,0.2)",
						borderRadius: "3px",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "rgb(0,0,0,0.2)",
						borderRadius: "3px",
					},
				}
			}}
		>
			<div className="adCards">
				{props.posts.map((post, index) => {
					return <AdCard key={index} post={post} />;
				})}
			</div>
		</Container>
	);
}
