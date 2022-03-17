import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions } from "@mui/material";
import pf_placeholder from "../img/pf_placeholder.png";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { color } from "@mui/system";

function AdCard(props) {
	const isBuying = props.post.isBuying;

	const date = new Date(props.post.date);
	const day = date.toLocaleString("default", { day: "numeric" });
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.toLocaleString("default", { year: "numeric" });

	// example: 169JOvPdmhZCFVuJXVq9bP414jA2
	const userid = props.post.author;

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

	const Rating = () => {

		const [reviews, setReviews] = useState([]);
		const reviewsCollectionRef = collection(db, "reviews");
		let avg = 0;

		useEffect(() => {
			const getReviews = async () => {
				const data = await getDocs(reviewsCollectionRef);
				setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			};

			getReviews();
		}, []);

		var counter = 0;
		var stars = 0;

		reviews.forEach((value) => {
			if (value.sellerId == userid) {
				counter++;
				stars += value.stars;
			}
		});

		avg = stars / counter;
		var rows = [];
		let s = <i className="fas fa-star"></i>;

		for (let i = 0; i < avg; i++) {
			rows.push(s);
		}

		return (
			<Typography size="small" sx={{ lineHeight: "1em", color: '#008080', width: '100px' }}>
				{rows}
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
							flexDirection: "column",
							alignItems: "center",
							padding: "0 !important",
							margin: "0 !important",
							cursor: "pointer",
						}}
					>
						<Container
							sx={{
								display: "flex",
								alignItems: "flex-end",
								paddingLeft: "0 !important",
							}}
						>
							<img
								src={pf_placeholder}
								style={{ height: "30px", marginRight: "6px" }}
							/>
							<Typography size="small" sx={{ lineHeight: "1em", width: '150px' }}>
								Ola Nordmann
							</Typography>
							<Rating />
						</Container>
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
						<Button
							disableElevation
							variant="text"
							color="success"
							className="tealButtonPill"
							sx={{
								margin: "0px 8px 0 0",
							}}
						>
							<i
								className="fal fa-comment"
								style={{ margin: "0 10px 0 0px", fontSize: "20px" }}
							/>
							Kontakt
						</Button>
					</Container>
				</Container>
			</CardActions>
		</Card>
	);
}
export default AdCard;
