import React from "react";
import Container from "@mui/material/Container";
import FilterMenu from "../components/FilterMenu";

export default function CardOverview() {
	return (
		/*Hoved-Container*/
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				padding: "0 0 0 14px !important",
				width: "600px",
			}}
		>
			<FilterMenu />
		</Container>
	);
}
