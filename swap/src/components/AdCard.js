import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { db } from "../firebase-config";
import { collection, getDocs, setDoc, addDoc, doc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { auth, createReviewDocument } from "../firebase-config"; // currentUser() gir currentuser
import NameAvatar from "./NameAvatar";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { isFunction } from "joi-browser";
import Contact from "../components/Contact";
import MarkSoldButton from "./MarkSoldButton";

function AdCard(props) {
	const { currentUser } = useAuth();

	const isBuying = props.post.isBuying;
	const isActive = props.post.active;

	const date = new Date(props.post.date);
	const day = date.toLocaleString("default", { day: "numeric" });
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.toLocaleString("default", { year: "numeric" });

	const userid = props.post.author; // example: 169JOvPdmhZCFVuJXVq9bP414jA2

	/* onAuthStateChanged(auth, () => {
		console.log(currentUser.uid);
		console.log("HEI");
	}); */

	const getReviews = () => {
		const [reviews, setReviews] = useState([]);
		const reviewsCollectionRef = collection(db, "reviews");

		useEffect(() => {
			const getReviews = async () => {
				const data = await getDocs(reviewsCollectionRef);
				setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			};
			getReviews();
		}, []);

		return reviews;
	};
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

	const RatingWrapper = () => {
		let reviews = getReviews();

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

		function userHasReview() {
			let hasReview = false;
			reviews.forEach((value) => {
				if (value.reviewerId == currentUser.uid && value.sellerId == userid) {
					hasReview = true;
				}
			});
			return hasReview;
		}

		let ratingToDisplay = 0;
		function updateRatingToDisplay() {
			if (userHasReview() === true) {
				reviews.forEach((value) => {
					if (value.reviewerId == currentUser.uid && value.sellerId == userid) {
						ratingToDisplay = value.stars;
					}
				});
			} else {
				ratingToDisplay = getAvg();
			}
		}

		updateRatingToDisplay();

		const [displayRating, setValue] = useState(0);

		useEffect(() => {
			setValue(ratingToDisplay);
		}, [ratingToDisplay]);

		const addReview = async (stars) => {
			if (userHasReview() === true) {
				let previousReview = null;

				reviews.forEach((value) => {
					if (value.reviewerId == currentUser.uid && value.sellerId == userid) {
						previousReview = value;
					}
				});

				await setDoc(doc(db, "reviews", previousReview.id), {
					reviewerId: currentUser.uid,
					stars: stars,
					sellerId: userid,
				});
			} else {
				await addDoc(collection(db, "reviews"), {
					reviewerId: currentUser.uid,
					stars: stars,
					sellerId: userid,
				});
			}
		};

		return (
			<>
				<Box sx={{ "& > legend": { mt: 2 } }} />
				<Rating
					style={userHasReview() ? { color: "teal" } : { color: "orange" }}
					id="starRating"
					name="simple-controlled"
					value={displayRating}
					onChange={(event, newValue) => {
						addReview(newValue);
						updateRatingToDisplay();
						setValue(newValue);
					}}
				/>
			</>
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
						{currentUser.uid === props.post.author &&
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
							flexDirection: "row",
							alignItems: "center",
							padding: "0 !important",
							margin: "0 !important",
							cursor: "pointer",
						}}
					>
						<Button>
							<NameAvatar name={props.post.authorDisplay} diameter={35} />
							<Typography
								variant="body2"
								color="text.secondary"
								marginLeft="10px"
								paddingRight="20px"
							>
								{props.post.authorDisplay.split(" ")[0]}
							</Typography>
						</Button>
						<RatingWrapper />
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
						{/* {!(uid === props.post.author || user === null || user === "Loading...") && (
							<Contact data={props.post}></Contact>
						)} */}
					</Container>
				</Container>
			</CardActions>
		</Card>
	);
}
export default AdCard;
