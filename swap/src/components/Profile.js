import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import NameAvatar from "./NameAvatar";
import { auth } from "../firebase-config";

const Profile = () => {
	const { currentUser } = auth;

	const name = currentUser === null ? "Loading..." : currentUser.displayName;
	const email = currentUser === null ? "Loading..." : currentUser.email;

	const handleClick = () => {
		return;
	};

	return (
		<Grid container direction="row" justifyContent="center" alignItems="center" margin="20px">
			<NameAvatar name={name} diameter={100} />
			<Grid id="top-row" item>
				<Grid item xs={12} marginLeft="20px" marginRight="10px" marginTop="5px">
					<PersonIcon />
				</Grid>
				<Grid item xs={12} marginLeft="20px" marginRight="10px" marginTop="5px">
					<DraftsIcon />
				</Grid>
				<Grid item xs={12} marginLeft="20px" marginRight="10px" marginTop="5px">
					<PhoneIphoneIcon />
				</Grid>
			</Grid>
			<Grid id="bottom-row" item>
				<Grid item xs={12} marginLeft="10px" marginRight="20px" marginTop="5px">
					<Typography fontSize={18} fontWeight={600}>
						{name}
					</Typography>
				</Grid>
				<Grid item xs={12} marginLeft="10px" marginRight="20px" marginTop="5px">
					<Typography fontSize={18}>{email}</Typography>
				</Grid>
				<Grid item xs={12} marginLeft="10px" marginRight="20px" marginTop="5px">
					<Typography fontSize={18}>{"Telefonnummer"}</Typography>
				</Grid>
			</Grid>
			<Button
				className="tealButtons"
				sx={{
					background: "teal",
					color: "white",
				}}
				id="editProfile"
				margin="20px"
				onClick={handleClick}
			>
				<EditIcon />
			</Button>
		</Grid>
	);
};

export default Profile;
