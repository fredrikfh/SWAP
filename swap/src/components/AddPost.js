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
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import AddIcon from "@mui/icons-material/Add";

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
		if (
			newTitle != "" &&
			newDate != "" &&
			newEventType != "" &&
			newVenue != "" &&
			newLocation != ""
		) {
			await addDoc(postsCollectionRef, {
				title: newTitle,
				description: newDescription,
				date: newDate,
				eventType: newEventType,
				location: newLocation,
				venue: newVenue,
				price: Number(newPrice),
				isBuying: Boolean(newSelling),
				createdAt: new Date(),
			});
			setOpen(false);
		}
	};

	const typeList = [
		{
			value: "Konsert",
			label: "Konsert",
		},
		{
			value: "Teater",
			label: "Teater",
		},
		{
			value: "Festival",
			label: "Festival",
		},
		{
			value: "Stand up",
			label: "Stand up",
		},
		{
			value: "Show",
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
				className="tealButtons"
				endIcon={<AddIcon />}
				variant="outlined"
				id="addItemButton"
				sx={{
					// bgcolor: "teal",
					border: 0,
					// color: "white",
					// height: 48,
					// "&:hover": {
					// 	bgcolor: "teal",
					// 	opacity: 0.6
					// }
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
								id="addItemRadioBuy"
							/>
							<FormControlLabel
								value="sellBtn"
								control={<Radio />}
								label="selge billett"
								id="addItemRadioSell"
							/>
						</RadioGroup>
					</FormControl>
					{newSelling === true && <></>}

					<Box component="form" noValidate autoComplete="off">
						<TextField
							required
							fullWidth
							id="addItemTitle"
							label="Tittel"
							variant="outlined"
							onChange={(event) => {
								setNewTitle(event.target.value);
							}}
						/>

						<TextField
							margin="dense"
							multiline
							rows={4}
							fullWidth
							id="addItemDescription"
							label="Beskrivelse"
							variant="outlined"
							onChange={(event) => {
								setNewDescription(event.target.value);
							}}
						/>

						<TextField
							margin="dense"
							style={{ paddingLeft: "2%" }}
							id="addItemEvent"
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

						<TextField
							margin="dense"
							noValidate
							id="addItemDate"
							label="Select Date"
							type="date"
							// defaultValue="2022-01-01"
							value={selectedDate}
							onChange={handleDateChange}
							InputLabelProps={{
								shrink: true,
							}}
						/>

						{newSelling === false && (
							<OutlinedInput
								margin="dense"
								id="addItemPrice"
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
							margin="dense"
							required
							fullWidth
							id="addItemLocation"
							label="By/sted"
							variant="outlined"
							onChange={(event) => {
								setNewLocation(event.target.value);
							}}
						/>

						<TextField
							required
							margin="dense"
							fullWidth
							id="addItemVenue"
							label="Arena"
							variant="outlined"
							onChange={(event) => {
								setNewVenue(event.target.value);
							}}
						/>
					</Box>
					<Button id="addItemCreate" onClick={handleCreate}>
						Lagre
					</Button>
				</Box>
			</Modal>
		</div>
	);
}

export default AddPost;
