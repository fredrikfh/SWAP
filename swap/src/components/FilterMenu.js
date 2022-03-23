import React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import Alert from "@mui/material/Alert";
import SearchIcon from "@mui/icons-material/Search";
import FilterSelect from "../components/FilterSelect";
import { getPosts } from "../components/getPosts";
import PostContainer from "../components/PostContainer";

export default function FilterMenu() {
	const [searchTerm, setSearchTerm] = useState("");
	const [price, setPrice] = useState("Selges");
	const [eventType, setEventType] = useState("Alle arrangementstyper");
	const [location, setLocation] = useState("Alle byer");

	const initPosts = getPosts();

	function handleSearchChange(event) {
		setSearchTerm(event.target.value);
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			handleSearch();
		}
	}

	function handlePriceSelect(price) {
		if (price === "Selges") {
			setPrice("Selges");
		}
		if (price === "Under 800kr") {
			setPrice(800);
		}
		if (price === "Under 400kr") {
			setPrice(400);
		}
		if (price === "Under 200kr") {
			setPrice(200);
		}
		if (price === "Ønskes kjøpt") {
			setPrice("Ønskes kjøpt");
		}
	}

	function handleEventSelect(eventType) {
		setEventType(eventType);
		filter();
	}

	function handleLocationSelect(location) {
		setLocation(location);
		filter();
	}

	// var setPosts(getPosts();

	function handleSearch() {
		setSearchTerm(searchTerm);
	}

	function filter(searchInput = "") {
		var filtered = initPosts;

		if (price === "Selges") {
			filtered = filtered.filter((p) => {
				return p.isBuying === false;
			});
		}

		if (price === "Ønskes kjøpt") {
			filtered = filtered.filter((p) => {
				return p.isBuying === true;
			});
		}

		if (price !== "Selges" && price !== "Ønskes kjøpt" && filtered.length !== 0) {
			filtered = filtered.filter((p) => {
				return p.price <= price && p.isBuying === false;
			});
		}

		if (eventType !== "Alle arrangementstyper") {
			filtered = filtered.filter((p) => {
				return p.eventType === eventType;
			});
		}

		if (location !== "Alle byer") {
			filtered = filtered.filter((p) => {
				return p.location === location;
			});
		}

		if (searchInput !== "") {
			filtered = filtered.filter((p) => {
				return p.title.toLowerCase().includes(searchTerm.toLowerCase());
			});
		}

		return filtered;
	}

	return (
		<div>
			<Container
				sx={{
					paddingLeft: "0 !important",
					width: "590.5px",
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
						justifyContent: "space-around",
						width: "100%",
					}}
				>
					<FilterSelect
						onItemSelect={handlePriceSelect}
						options={[
							"Selges",
							"Ønskes kjøpt",
							"Under 800kr",
							"Under 400kr",
							"Under 200kr",
						]}
					/>
					<FilterSelect
						onItemSelect={handleEventSelect}
						options={[
							"Alle arrangementstyper",
							"Konsert",
							"Teater",
							"Festival",
							"Stand up",
							"Show",
						]}
					/>
					<FilterSelect
						onItemSelect={handleLocationSelect}
						options={["Alle byer", "Oslo", "Trondheim", "Bodø", "Stavanger"]}
					/>
				</Container>
			</Container>

			{filter(searchTerm).length !== 0 &&
				price === "Selges" &&
				eventType === "Alle arrangementstyper" &&
				location === "Alle byer" && <PostContainer posts={filter(searchTerm)} />}

			{filter(searchTerm).length !== 0 &&
				!(
					price === "Selges" &&
					eventType === "Alle arrangementstyper" &&
					location === "Alle byer"
				) && <PostContainer posts={filter(searchTerm)} />}

			{filter(searchTerm).length === 0 && (
				<Container
					sx={{
						display: "flex",
						width: "553.5px",
					}}
				>
					<Alert
						severity="info"
						sx={{
							width: "400%",
							height: "50px",
							display: "flex",
							alignItems: "center",
							margin: "40px 0 0 75px",
						}}
					>
						Ingen resultater stemmer med ditt søk
					</Alert>
					<PostContainer posts={[]} />
				</Container>
			)}
		</div>
	);
}
