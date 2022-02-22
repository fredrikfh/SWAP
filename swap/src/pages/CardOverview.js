import Container from "@mui/material/Container";
import FilterMenu from "../components/FilterMenu";
import AdCard from "../components/AdCard";

export default function CardOverview() {
	return (
		/*Hoved-Container*/
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				marginLeft: "4em",
				padding: "0 !important",
				width: "600px",
			}}
		>
			<FilterMenu />
			{/*Annonseliste-Container*/}
			<Container
				sx={{
					height: "calc(100vh - 300px)",
					width: "calc(100% - 30px)",
					padding: "0 !important",
					marginTop: "1em",
					marginLeft: "0",
					overflowY: "scroll",
					"&::-webkit-scrollbar": {
						width: 6,
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: "rgb(240,240,240)",
						borderRadius: "3px",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "rgb(220,220,220)",
						borderRadius: "3px",
					},
				}}
			>
				<AdCard />
				<AdCard />
				<AdCard />
				<AdCard />
				<AdCard />
				<AdCard />
				<AdCard />
			</Container>
		</Container>
	);
}
