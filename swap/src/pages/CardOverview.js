import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import FilterMenu from "../components/FilterMenu";

export default function CardOverview() {
	return (
		/*Hoved-Container*/
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "700px",
			}}
		>
			<FilterMenu />
			{/*Annonseliste-Container*/}
			<Container>
				<Card
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "calc(100% - 3em)",
						height: "12em",
						margin: "1em auto 0 auto",
						background: "rgb(250,250,250)",
					}}
				>
					<h2>Her kommer kort-komponenten</h2>
				</Card>
				<Card
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "calc(100% - 3em)",
						height: "12em",
						margin: "1em auto 0 auto",
						background: "rgb(250,250,250)",
					}}
				>
					<h2>Her kommer kort-komponenten</h2>
				</Card>
				<Card
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "calc(100% - 3em)",
						height: "12em",
						margin: "1em auto 0 auto",
						background: "rgb(250,250,250)",
					}}
				>
					<h2>Her kommer kort-komponenten</h2>
				</Card>
			</Container>
		</Container>
	);
}
