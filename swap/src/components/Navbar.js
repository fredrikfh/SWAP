import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddPost from "./AddPost";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
	const navigate = useNavigate();

	function handleClickHome() {
		navigate("/");
	}

	function handleClickProfile() {
		navigate("/profile");
	}

	const [hasLoaded, setHasLoaded] = useState(false);

	onAuthStateChanged(auth, () => {
		setHasLoaded();
	});

	useEffect(() => {
		return
	}, [hasLoaded]);




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
					<span>{auth.currentUser?.displayName}</span>
				</Container>
			</Container>
		</Container>
	);
}
