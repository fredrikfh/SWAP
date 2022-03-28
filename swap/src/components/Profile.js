import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import NameAvatar from "./NameAvatar";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
	const { currentUser } = useAuth();
	const handleClick = () => {
		return;
	};

	return (
		<Grid container direction="row" justifyContent="center" alignItems="center" padding="20px">
			<NameAvatar name={currentUser.displayName} diameter={100} />
			<Grid id="top-row" item>
				<Grid item xs={12} paddingLeft="20px" paddingRight="10px" paddingTop="5px">
					<PersonIcon />
				</Grid>
				<Grid item xs={12} paddingLeft="20px" paddingRight="10px" paddingTop="5px">
					<DraftsIcon />
				</Grid>
				<Grid item xs={12} paddingLeft="20px" paddingRight="10px" paddingTop="5px">
					<PhoneIphoneIcon />
				</Grid>
			</Grid>
			<Grid id="bottom-row" item>
				<Grid item xs={12} paddingLeft="10px" paddingRight="20px" paddingTop="5px">
					<Typography id={"profileName"} fontSize={18} fontWeight={600}>
						{currentUser ? currentUser.displayName : "Not logged in"}
					</Typography>
				</Grid>
				<Grid item xs={12} paddingLeft="10px" paddingRight="20px" paddingTop="5px">
					<Typography id={"profileMail"} fontSize={18}>
						{currentUser ? currentUser.email : "Not logged in"}
					</Typography>
				</Grid>
				<Grid item xs={12} paddingLeft="10px" paddingRight="20px" paddingTop="5px">
					<Typography id={"profilePhone"} fontSize={18}>
						{"46509581"}
					</Typography>
				</Grid>
			</Grid>
			{/* <Button
				className="tealButtons"
				sx={{
					background: "teal",
					color: "white",
				}}
				id="editProfile"
				padding="20px"
				onClick={handleClick}
			>
				<EditIcon />
			</Button> */}
		</Grid>
	);
};

export default Profile;
