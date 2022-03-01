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
		if (mailRef.current.value == "") {
			setMail(mail);
		} else {
			setMail(mailRef.current.value);
		}
		console.log(mail);
		return console.log(mailRef.current.value);
	};

	const sendValueName = () => {
		if (nameRef.current.value == "") {
			setName(name);
		} else {
			setName(nameRef.current.value);
		}
		console.log(name);
		return console.log(nameRef.current.value);
	};

	const sendValuePhoneNumber = () => {
		if (phoneNumberRef.current.value == "") {
			setPhoneNumber(phoneNumber);
		} else {
			setPhoneNumber(phoneNumberRef.current.value);
		}
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
										<ListItemText primary={name} />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon>
											<DraftsIcon />
										</ListItemIcon>
										<ListItemText primary={mail} />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon>
											<PhoneIphoneIcon />
										</ListItemIcon>
										<ListItemText primary={phoneNumber} />
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
								id="navnEdit"
								label={name}
								variant="outlined"
							/>
							<p>Mail: </p>
							<TextField
								inputRef={mailRef}
								id="mailEdit"
								label={mail}
								variant="outlined"
							/>
							<p>Tlf-nummer: </p>
							<TextField
								inputRef={phoneNumberRef}
								id="mailEdit"
								label={phoneNumber}
								variant="outlined"
							/>
							<Button
								className="tealButtons"
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
