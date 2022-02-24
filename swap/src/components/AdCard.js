import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import pf_placeholder from "../img/pf_placeholder.png";

import PropTypes from "prop-types";

AdCard.propTypes = {
	post: PropTypes.any,
};

function AdCard(props) {
	// const headline = "overskrift fra database";
	// const description = "her kommer en beskrivelse om annonsen osv heehehhe";
	const tagsList = ["Til salgs", "Trondheim Spektrum", "4.mai"];

	function mapTest() {
		for (let i = 0; i < tagsList.length; i++) {
			console.log(tagsList[i]);
		}
	}
	mapTest();

	return (
		<Card
			sx={{
				maxWidth: 528,
				marginLeft: "24px",
				marginBottom: "1em",
			}}
		>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: 0 }}>
						{props.post.title}
					</Typography>
					<Chip label="Til salgs" color="success" size="small" />
					<Chip label="Trondheim spektrum" size="small" />
					<Chip label="4.mai" size="small" />
					<Chip label="Konsert" size="small" />
					<Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "8.4px" }}>
						240 kr
					</Typography>
					<Typography variant="body2" color="text.secondary">
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
						<FavoriteBorderIcon />
						<Button
							className="tealButtons"
							sx={{
								background: "teal",
								color: "white",
								marginLeft: "8px",
							}}
						>
							Send melding
						</Button>
					</Container>
				</Container>
			</CardActions>
		</Card >
	);
}

export default AdCard;
