import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import AddPost from "./AddPost";

export default function Navbar() {
	const [loggedIn, setLoggedIn] = useState(false);

	// bytt ut denne useeffecten med getonauthstatechanged elns
	useEffect(() => {
		setLoggedIn(false);
	}, [null]);

	const navigate = useNavigate();

	function handleClickHome() {
		navigate("/");
	}

	function handleClickProfile() {
		navigate("/profile");
	}

	function handleClickSignOut() {
		// håndter utlogging i firebase
		console.log("Logger ut");
	}

	// test comment
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",

				marginTop: "1.5em",
				height: "65px",
				width: "calc(100% - 8em)",
				maxWidth: "100% !important",
				marginLeft: "4em",
				marginRight: "4em !important",
				background: "white",
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
				<AddPost />
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
				{loggedIn ? (
					<Container
						onClick={handleClickSignOut}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",

							paddingRight: "0px!important",
							width: "fit-content",
							cursor: "pointer",
						}}
					>
						<LogoutIcon
							sx={{
								height: ".8em",
								cursor: "pointer",
							}}
						/>
						<span>Logg ut</span>
					</Container>
				) : null}
			</Container>
		</Container>
	);
}
