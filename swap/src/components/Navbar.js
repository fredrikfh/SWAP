import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import AddPost from "./AddPost";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

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

	const handleLogin = () => {
		navigate("/login");
	};

	const [hasLoaded, setHasLoaded] = useState(false);

	onAuthStateChanged(auth, () => {
		setHasLoaded();
	});

	useEffect(() => {
		return;
	}, [hasLoaded]);

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
				{!(auth.currentUser === null) ? (
					<AddPost />
				) : (
					<Button
						className="tealButtons"
						variant="outlined"
						id="addItemButton"
						sx={{
							border: 0,
						}}
						onClick={handleLogin}
					>
						Logg inn
					</Button>
				)}
				{!(auth.currentUser === null) && (
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
						<PersonIcon />
						<span>{auth.currentUser?.displayName}</span>
					</Container>
				)}
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
