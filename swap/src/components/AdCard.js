import React, { useState } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import {
	Button,
	CardActionArea,
	CardActions,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from "@mui/material";
import pf_placeholder from "../img/pf_placeholder.png";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function AdCard(props) {
	const [reportOpen, setReportOpen] = useState(false);
	function handleReportClick() {
		setReportOpen(!reportOpen);
	}

	function handleReport() {
		console.log(props.post.authorDisplay + "har blitt rapportert");
		handleReportClick();
	}

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
		<React.Fragment>
			<Card
				sx={{
					position: "relative",
					maxWidth: 528,
					marginLeft: "24px",
					marginBottom: "1em",
				}}
				className="adCardShadow"
			>
				<PriorityHighIcon
					color="disabled"
					sx={{
						zIndex: 1,
						position: "absolute",
						height: "20px",
						right: 20,
						top: 20,
						cursor: "pointer",
					}}
					onClick={handleReportClick}
				/>
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
							<img
								src={pf_placeholder}
								style={{ height: "30px", marginRight: "6px" }}
							/>
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
			<Dialog open={reportOpen} onClose={handleReportClick}>
				<DialogTitle id="alert-dialog-title">
					{"Vil du rapportere innlegget: " + props.post.title + "?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Innlegget vil bli markert og sendt til administrator for gjennomgang
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleReportClick}>Avbryt</Button>
					<Button onClick={handleReport} autoFocus color="error">
						Rapporter
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
export default AdCard;
