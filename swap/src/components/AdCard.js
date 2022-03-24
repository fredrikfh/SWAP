import React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActions } from "@mui/material";
import Contact from "../components/Contact";
import NameAvatar from "./NameAvatar";
import { auth } from "../firebase-config";
import MarkSoldButton from "./MarkSoldButton";

function AdCard(props) {
	const uid = auth.currentUser === null ? "Loading..." : auth.currentUser.uid;
	const user = auth.currentUser === null ? "Loading..." : auth.currentUser;

	const isBuying = props.post.isBuying;
	const isActive = props.post.active;

	const date = new Date(props.post.date);
	const day = date.toLocaleString("default", { day: "numeric" });
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.toLocaleString("default", { year: "numeric" });

	function chipLabel() {
		if (isActive) {
			return isBuying ? "Ønskes kjøpt" : "Til salgs";
		}
		if (!isActive) {
			return "Solgt";
		}
	}

	function chipColor() {
		if (isActive) {
			return isBuying ? "adc-buy" : "adc-sell";
		}
		if (!isActive) {
			return "adc-sold";
		}
	}

	const Chips = () => {
		return (
			<div style={{ margin: "8px 0" }}>
				<Chip label={chipLabel()} size="small" className="cardChip" id={chipColor()} />
				<Chip label={props.post.location} size="small" className="cardChip adCardPill" />
				<Chip label={props.post.venue} size="small" className="cardChip adCardPill" />
				<Chip
					label={day + month + " " + year}
					size="small"
					className="cardChip adCardPill"
				/>
				<Chip label={props.post.eventType} size="small" className="cardChip adCardPill" />
			</div>
		);
	};

	const Price = () => {
		return (
			<Typography variant="h5" sx={{ marginTop: "12px" }}>
				{isBuying ? "" : props.post.price + " kr"}
			</Typography>
		);
	};

	return (
		<Card
			sx={{
				maxWidth: 514,
				marginLeft: "0em",
				marginBottom: "1em",
				background: "rgba(255,255,255,0.7)",
				backdropFilter: "blur( 12px )",

				"&:last-child": {
					marginBottom: 0,
				},
			}}
			className="adCardShadow"
		>
			<CardContent>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					wrap="nowrap"
				>
					<Grid item zeroMinWidth>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{ fontWeight: "600", marginBottom: 0 }}
						>
							{props.post.title}
						</Typography>
					</Grid>
					<Grid item>
						{uid === props.post.author &&
							props.post.isBuying === false &&
							props.post.active === true && <MarkSoldButton post={props.post} />}
					</Grid>
				</Grid>
				<Chips />
				<Price />
				<Typography variant="body2" color="text.secondary" style={{ marginTop: "10px" }}>
					{props.post.description}
				</Typography>
			</CardContent>
			<CardActions sx={{ padding: "16px" }}>
				<Container
					sx={{
						display: "flex",
						justifyContent: "space-between",
						padding: "0 !important",
						margin: "0 !important",
						width: "600px",
					}}
				>
					<Container
						sx={{
							display: "flex",
							alignItems: "center",
							padding: "0 !important",
							margin: "0 !important",
							cursor: "pointer",
						}}
					>
						<Button>
							<NameAvatar name={props.post.authorDisplay} diameter={35} />
							<Typography variant="body2" color="text.secondary" marginLeft="10px">
								{props.post.authorDisplay.split(" ")[0]}
							</Typography>
						</Button>
					</Container>
					<Container
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "right",
							padding: "0 !important",
							margin: "0 !important",
						}}
					>
						{!(uid === props.post.author || user === null || user === "Loading...") && (
							<Contact data={props.post}></Contact>
						)}
					</Container>
				</Container>
			</CardActions>
		</Card>
	);
}
export default AdCard;
