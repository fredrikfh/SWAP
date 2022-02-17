import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Profile() {
	//const [name] = useState("navn navnesen");
	//const [mail] = useState["mail@mail.no"];
	const [changeMail, setChangeMail] = useState(false);
	const [mail, setMail] = useState("hei her er mailen min");
	const mailRef = useRef("");

	const sendValue = () => {
		setMail(mailRef.current.value);
		console.log(mail);
		return console.log(mailRef.current.value);
	};

	return (
		<div>
			<Grid container direction="column" justifyContent="space-evenly" alignItems="center">
				{changeMail === false && <p>Mail: {mail}</p>}
				{changeMail === true && (
					<Box>
						<TextField
							inputRef={mailRef}
							id="mailEdit"
							label={mail}
							variant="outlined"
						/>
						<Button onClick={sendValue}>Lagre ny mail</Button>
					</Box>
				)}

				<Button onClick={() => setChangeMail(!changeMail)}>Rediger profil</Button>
			</Grid>
		</div>
	);
}

export default Profile;
