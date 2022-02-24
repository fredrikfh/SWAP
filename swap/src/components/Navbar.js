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
				<AddPost>
				</AddPost>
				<Container
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
