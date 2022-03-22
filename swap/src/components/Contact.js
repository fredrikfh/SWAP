import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import NameAvatar from "./NameAvatar";
import "date-fns";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 0,
	p: 4,
};

function Contact(data) {
	const postTitle = data.data.title;
	//console.log(data.data);

	const isBuying = data.data.isBuying;

	const date = new Date(data.data.date);
	const day = date.toLocaleString("default", { day: "numeric" });
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.toLocaleString("default", { year: "numeric" });

	const Chips = () => {
		return (
			<div style={{ margin: "8px 0" }}>
				<Chip
					label={isBuying ? "Ønskes kjøpt" : "Til salgs"}
					size="small"
					className="cardChip"
					id={isBuying ? "adc-buy" : "adc-sell"}
				/>
				<Chip label={data.data.location} size="small" className="cardChip adCardPill" />
				<Chip label={data.data.venue} size="small" className="cardChip adCardPill" />
				<Chip
					label={day + month + " " + year}
					size="small"
					className="cardChip adCardPill"
				/>
				<Chip label={data.data.eventType} size="small" className="cardChip adCardPill" />
			</div>
		);
	};

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
				Kontakt
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h1">
						{postTitle}
					</Typography>
					<Chips />
					<Container
						sx={{
							display: "flex",
							alignItems: "center",
							padding: "0 !important",
							margin: "0 !important",
							cursor: "pointer",
						}}
					>
						<NameAvatar name={data.data.authorDisplay} diameter={35} />
						<Typography size="small" marginLeft="10px">
							{data.data.authorDisplay}
						</Typography>
					</Container>
					<Typography>{data.data.description}</Typography>
					<Typography>Mail: {data.data.email}</Typography>
				</Box>
			</Modal>
		</div>
	);
}

export default Contact;
