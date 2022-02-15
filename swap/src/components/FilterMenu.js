import { useState } from "react";

import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import FilterSelect from "../components/FilterSelect";

export default function FilterMenu() {
	const [searchTerm, setSearchTerm] = useState("");

	function handleSearchChange(event) {
		setSearchTerm(event.target.value);
	}

	function handleSearch() {
		console.log(searchTerm);
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			handleSearch();
		}
	}

	return (
		<Container
			sx={{
				paddingLeft: "0 !important",
			}}
		>
			{/*Input-Container*/}
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "right",

					position: "relative",
					width: "100%",
				}}
			>
				<Input
					sx={{
						padding: "0 1em 0 1em",
						margin: "1em 0 1em 0",
						width: "100%",
						height: "3em",
						background: "rgb(245,245,245)",
						borderRadius: "5px",
					}}
					placeholder="Søk..."
					value={searchTerm}
					onChange={handleSearchChange}
					onKeyDown={handleKeyDown}
				></Input>
				<SearchIcon
					sx={{
						position: "absolute",
						marginRight: ".5em",
						transform: "rotateY(180deg)",
						cursor: "pointer",
					}}
					onClick={handleSearch}
				/>
			</Container>

			{/*Select-element-container*/}
			<Container
				sx={{
					display: "flex",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<FilterSelect options={["Alle typer", "Kino", "Konsert", "Teater"]} />
				<FilterSelect options={["Alle arrangementstyper", "Kino", "Konsert", "Teater"]} />
				<FilterSelect options={["Alle byer", "Oslo", "Trondheim", "Bergen"]} />
			</Container>
		</Container>
	);
}
