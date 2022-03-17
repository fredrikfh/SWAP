import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddPost from "./AddPost";

export default function Navbar() {
	const navigate = useNavigate();

	function handleClickHome() {
		navigate("/");
	}

	function handleClickProfile() {
		navigate("/profile");
	}

	// test comment
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",

				padding: "1.5em",
				width: "100%",
				maxWidth: "100% !important",
				paddingLeft: "6em !important",
				paddingRight: "6em !important",
				background: "white",
				boxShadow: "0px -2px 10px 1px rgba(0,0,0,0.3)",
			}}
		>
			<img
				onClick={handleClickHome}
				src="./logo/main_text.svg"
				style={{ height: "40px", cursor: "pointer" }}
			/>
			<Container
				sx={{
					display: "flex",
					margin: "0",
					paddingRight: "0px !important",
					justifyContent: "space-between",
					alignItems: "center",

					width: "fit-content",
				}}
			>
				<AddPost></AddPost>
				<Container
					id="profileButton"
					onClick={handleClickProfile}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",

						paddingRight: "0px!important",
						width: "fit-content",
						cursor: "pointer",
					}}
				>
					<PersonOutlineIcon />
					<span>Brukernavn</span>
				</Container>
			</Container>
		</Container>
	);
}
