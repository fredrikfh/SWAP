import React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CardActionArea, CardActions } from "@mui/material";
import pf_placeholder from "../img/pf_placeholder.png";
import Contact from "../components/Contact";

function AdCard(props) {
	const isBuying = props.post.isBuying;

	const date = new Date(props.post.date);
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
				maxWidth: 528,
				marginLeft: "24px",
				marginBottom: "1em",
			}}
			className="adCardShadow"
		>
			<CardActionArea>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{ fontWeight: "600", marginBottom: 0 }}
					>
						{props.post.title}
					</Typography>
					<Chips />
					<Price />
					<Typography
						variant="body2"
						color="text.secondary"
						style={{ marginTop: "10px" }}
					>
						{props.post.description}
					</Typography>
				</CardContent>
			</CardActionArea>
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
						<img src={pf_placeholder} style={{ height: "30px", marginRight: "6px" }} />
						<Typography size="small">Ola Nordmann</Typography>
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
						<Contact data={props.post}></Contact>
					</Container>
				</Container>
			</CardActions>
		</Card>
	);
}
export default AdCard;
