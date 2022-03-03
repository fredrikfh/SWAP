import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import pf_placeholder from "../img/pf_placeholder.png";

function Profile() {
	const [name, setName] = useState("Navn Navnesen");
	const nameRef = useRef("");
	//const [mail] = useState["mail@mail.no"];
	const [changeMail, setChangeMail] = useState(false);
	const [mail, setMail] = useState("navn.navnesen@gmail.com");
	const mailRef = useRef("");

	const [phoneNumber, setPhoneNumber] = useState(12345678);
	const phoneNumberRef = useRef("");

	const sendValueMail = () => {
		setMail(mailRef.current.value);
		console.log(mail);
		return console.log(mailRef.current.value);
	};

	const sendValueName = () => {
		setName(nameRef.current.value);
		console.log(name);
		return console.log(nameRef.current.value);
	};

	const sendValuePhoneNumber = () => {
		setPhoneNumber(phoneNumberRef.current.value);
		console.log(name);
		return console.log(nameRef.current.value);
	};

	const handleSaveChanges = () => {
		sendValueMail();
		sendValueName();
		sendValuePhoneNumber();
		setChangeMail(!changeMail);
		console.log("endringer er gjort");
	};

	return (
		<div>
			<Grid container direction="column" justifyContent="space-evenly" alignItems="center">
				<h1>Hei, {name}!</h1>
				<img width="100px" src={pf_placeholder} alt="Profilepicture" />

				{changeMail === false && (
					<>
						<nav aria-label="main mailbox folders">
							<List>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon>
											<PersonIcon />
										</ListItemIcon>
										<ListItemText id="profileName" primary={name} />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon>
											<DraftsIcon />
										</ListItemIcon>
										<ListItemText id="profileMail" primary={mail} />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon>
											<PhoneIphoneIcon />
										</ListItemIcon>
										<ListItemText id="profilePhone" primary={phoneNumber} />
									</ListItemButton>
								</ListItem>
							</List>
						</nav>

						<Button
							className="tealButtons"
							sx={{
								background: "teal",
								color: "white",
							}}
							id="editProfile"
							onClick={() => setChangeMail(!changeMail)}
						>
							Rediger profil
						</Button>
					</>
				)}

				{changeMail === true && (
					<Box>
						<FormControl>
							<p>Navn: </p>
							<TextField
								inputRef={nameRef}
								label={name}
								variant="outlined"
								id="profileNameInput"
							/>
							<p>Mail: </p>
							<TextField
								inputRef={mailRef}
								label={mail}
								variant="outlined"
								id="profileMailInput"
							/>
							<p>Tlf-nummer: </p>
							<TextField
								inputRef={phoneNumberRef}
								label={phoneNumber}
								variant="outlined"
								id="profilePhoneInput"
							/>
							<Button
								className="tealButtons"
								id="saveProfile"
								sx={{
									background: "teal",
									color: "white",
								}}
								onClick={handleSaveChanges}
							>
								Lagre endringer
							</Button>
						</FormControl>
					</Box>
				)}
			</Grid>
		</div>
	);
}

export default Profile;
