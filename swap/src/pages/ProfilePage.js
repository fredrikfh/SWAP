import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { auth } from "../firebase-config";
import getPosts from "../components/getPosts";
import PostContainer from "../components/PostContainer";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
	const navigate = useNavigate();

	if (auth.currentUser === null) navigate("/login");

	return (
		<div>
			<Profile />
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				margin="0px"
			>
				<Grid id="top-row" item>
					<Grid item xs={12}>
						<Typography
							fontSize={20}
							fontWeight={600}
							align="center"
							margin="20px"
							sx={{
								lineHeight: "2.2em",
								height: "2.2em",
								padding: "0 0.4em 0 0.4em",
								border: "none",
								borderRadius: "1.1em",
								background: "#ffe6cb",
							}}
						>
							Aktive Biletter
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Container
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								marginLeft: "4em",
								padding: "0 !important",
								width: "600px",
							}}
						>
							<PostContainer
								posts={getPosts().filter(
									(post) => post.author === auth.currentUser?.uid
								)}
							/>
						</Container>
					</Grid>
				</Grid>
				<Grid id="bottom-row" item>
					<Grid item xs={12}>
						<Typography
							fontSize={20}
							fontWeight={600}
							align="center"
							margin="20px"
							sx={{
								lineHeight: "2.2em",
								height: "2.2em",
								padding: "0 0.4em 0 0.4em",
								border: "none",
								borderRadius: "1.1em",
								background: "#ffe6cb",
							}}
						>
							Solgte Biletter
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Container
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								marginLeft: "4em",
								padding: "0 !important",
								width: "600px",
							}}
						>
							<PostContainer
								posts={getPosts().filter(
									(post) => post.author !== auth.currentUser?.uid
								)}
							/>
						</Container>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default ProfilePage;
