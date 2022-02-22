import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import "date-fns";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 0,
	p: 4,
};

function AddPost() {
	var today = new Date();
	var month = today.getMonth() + 1;

	if (month < 10) {
		month = "0" + month;
	}

	var date = today.getFullYear() + "-" + month + "-" + today.getDate();

	const [selectedDate, setSelectedDate] = useState(date);

	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
		setNewDate(event.target.value);
	};
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);


	const [value, setValue] = React.useState("buyBtn");

	const [newTitle, setNewTitle] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const [newDate, setNewDate] = useState(date);
	const [newEventType, setNewEventType] = useState();
	const [newLocation, setNewLocation] = useState("");
	const [newVenue, setNewVenue] = useState("");
	const [newPrice, setNewPrice] = useState(0);
	const [newSelling, setNewSelling] = useState(true);

	const postsCollectionRef = collection(db, "posts");

	const handleCreate = async () => {
		await addDoc(postsCollectionRef, {
			title: newTitle,
			description: newDescription,
			date: newDate,
			eventType: newEventType,
			location: newLocation,
			venue: newVenue,
			price: Number(newPrice),
			isBuying: Boolean(newSelling),
		});
		setOpen(false);
	};

	const typeList = [
		{
			value: "consert",
			label: "Konsert",
		},
		{
			value: "theater",
			label: "Teater",
		},
		{
			value: "festival",
			label: "Festival",
		},
		{
			value: "standup",
			label: "Stand up",
		},
		{
			value: "show",
			label: "Show",
		},
	];

	const [type, setType] = React.useState("consert");

	const handleChangeType = (event) => {
		setType(event.target.value);
		setNewEventType(event.target.value);
	};

	const handleChange = (event) => {
		setValue(event.target.value);
		if (value === "buyBtn") {
			setNewPrice(null);
			setNewSelling(false);
		} else if (value === "sellBtn") {
			setNewSelling(true);
		}
	};

	return (
		<div>
			<Button
				sx={{
					background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
					border: 0,
					borderRadius: 3,
					boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
					color: "white",
					height: 48,
					padding: "0 30px",
				}}
				onClick={handleOpen}
			>
				Lag nytt innlegg
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Legg til innlegg
					</Typography>
					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label">Jeg ønsker å</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="buyBtn"
							name="radio-buttons-group"
							onChange={handleChange}
							value={value}
						>
							<FormControlLabel
								value="buyBtn"
								control={<Radio />}
								label="kjøpe billett"
							/>
							<FormControlLabel
								value="sellBtn"
								control={<Radio />}
								label="selge billett"
							/>
						</RadioGroup>
					</FormControl>
					{newSelling === true && <></>}

					<Box component="form" noValidate autoComplete="off">
						<TextField
							required
							fullWidth
							id="outlined-basic"
							label="Tittel"
							variant="outlined"
							onChange={(event) => {
								setNewTitle(event.target.value);
							}}
						/>

						<TextField
							margin="normal"
							multiline
							rows={4}
							fullWidth
							id="outlined-basic"
							label="Beskrivelse"
							variant="outlined"
							onChange={(event) => {
								setNewDescription(event.target.value);
							}}
						/>

						<TextField
							margin="normal"
							style={{ paddingLeft: "2%" }}
							id="outlined-select-currency"
							select
							//label="Velg type arrangement"
							//label="Select"
							value={type}
							onChange={handleChangeType}
							helperText="Velg type arrangement"
						>
							{typeList.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<form noValidate>
							<TextField
								id="date"
								label="Select Date"
								type="date"
								// defaultValue="2022-01-01"
								value={selectedDate}
								onChange={handleDateChange}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</form>
						{newSelling === false && (
							<OutlinedInput
								margin="normal"
								id="outlined-adornment-weight"
								endAdornment={<InputAdornment position="end">kr</InputAdornment>}
								aria-describedby="outlined-weight-helper-text"
								inputProps={{
									"aria-label": "weight",
								}}
								onChange={(event) => {
									setNewPrice(event.target.value);
								}}
							/>
						)}

						<TextField
							required
							fullWidth
							id="outlined-basic"
							label="By/sted"
							variant="outlined"
							onChange={(event) => {
								setNewLocation(event.target.value);
							}}
						/>

						<TextField
							fullWidth
							id="outlined-basic"
							label="Arena"
							variant="outlined"
							onChange={(event) => {
								setNewVenue(event.target.value);
							}}
						/>
					</Box>
					<Button onClick={handleCreate}>Lagre</Button>
				</Box>
			</Modal>
		</div>
	);
}

export default AddPost;
