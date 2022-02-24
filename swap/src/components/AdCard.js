import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

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
		<Card sx={{ maxWidth: 345, color: "hotpink" }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.post.title};
					</Typography>

					<Typography variant="body2" color="text.secondary">
						{props.post.description};
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Send melding
				</Button>
			</CardActions>
		</Card>
	);
}

export default AdCard;
