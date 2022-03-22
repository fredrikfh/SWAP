import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions } from "@mui/material";
import pf_placeholder from "../img/pf_placeholder.png";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
// import { color } from "@mui/system";
import Rating from "@mui/material/Rating";
import { auth, createReviewDocument } from '../firebase-config'; // auth.currentUser() gir currentuser

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

const starStyle = {
	color: "yellow"
}

function AdCard(props) {
	const isBuying = props.post.isBuying;

	const date = new Date(props.post.date);
	const day = date.toLocaleString("default", { day: "numeric" });
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.toLocaleString("default", { year: "numeric" });

	const userid = props.post.author; // example: 169JOvPdmhZCFVuJXVq9bP414jA2

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

		useEffect(() => {
			const getReviews = async () => {
				const data = await getDocs(reviewsCollectionRef);
				setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			};

			getReviews();
		}, []);

		function getAvg() {
			var counter = 0;
			var stars = 0;
			reviews.forEach((value) => {
				if (value.sellerId == userid) {
					counter++;
					stars += value.stars;
				}
			});
			return stars / counter;
		}

		// return the review if user has review, else false
		function userHasReview() {
			reviews.forEach((value) => {
				if (value.reviewerId == currentUser.id) { // usikker på om denne funker!
					return true;
				}
			});
			return false;
		}

		const currentUser = auth.currentUser();
		// todo: 
		// find currentUser id
		// if id has a review, make stars blue
		// else make stars yellow

		let ratingToDisplay = 0;
		if (userHasReview) {
			// finn brukerens anmeldelse og vis stjernene i blått
			reviews.forEach((value) => {
				if (value.reviewerId == currentUser.id) { // usikker på om argumentene er de samme som i databasen
					ratingToDisplay = value.stars;
				}
			});
			// TODO: make stars blue
		} else {
			return getAvg();
		}

		const [avgRating, setValue] = React.useState(ratingToDisplay);

		function addReview(stars) {
			// send review med reviewerId, stars, sellerId
			createReviewDocument(currentUser.id, stars, userid);
		}

		
		return (
			<>
				<Box sx={{ "& > legend": { mt: 2 } }} />
				<Rating
					id="starRating"
					name="simple-controlled"
					value={avgRating}
					onChange={(event, newValue) => {
						setValue(newValue);
						addReview(newValue);
						// color = blue;
					}}
				/>
			</>
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
							<Typography size="small" sx={{ lineHeight: "1em", width: "150px" }}>
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
