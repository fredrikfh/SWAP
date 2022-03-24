import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import SellIcon from "@mui/icons-material/Sell";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function MarkSoldButton(props) {
	const [open, setOpen] = useState(false);
	// const [newActiveStatus, setNewActiveStatus] = useState(true)

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleCloseAgree = async () => {
		const ref = doc(db, `posts/${props.post.id}`);
		await updateDoc(ref, { active: false });
		setOpen(false);
		window.location.reload();
	};

	return (
		<div>
			<Button
				className="sellButtons"
				endIcon={<SellIcon />}
				variant="outlined"
				onClick={handleClickOpen}
			>
				Solgt
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>
					Er du sikker på at du vil markere biletten som <strong>SOLGT</strong>?
				</DialogTitle>
				<Box display="flex" justifyContent="space-evenly">
					<Button onClick={handleClose}>Nei</Button>
					<Button onClick={handleCloseAgree}>Ja</Button>
				</Box>
			</Dialog>
		</div>
	);
}
