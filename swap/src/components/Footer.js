import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
	return (
		<footer style={{ width: "100vw" }}>
			<Box
				sx={{
					width: "100vw",
					backgroundColor: "#ffe6cb",
					padding: "15px 0 15px 0",
					marginTop: "37px",
				}}
			>
				<Grid container spacing={0} paddingLeft="20px">
					<img src="./logo/black_text.svg" style={{ height: "30px", margin: "15px" }} />
					<Grid id="top-row" item>
						<Grid item xs={12} marginLeft="20px">
							<Typography fontSize={12} fontWeight={600}>
								© Swap AS
							</Typography>
						</Grid>
						<Grid item xs={12} marginLeft="20px">
							<Typography fontSize={10}>IT-bygget, almen,</Typography>
						</Grid>
						<Grid item xs={12} marginLeft="20px">
							<Typography fontSize={10}>Sem Sælands vei 9,</Typography>
						</Grid>
						<Grid item xs={12} marginLeft="20px">
							<Typography fontSize={10}>7034 Trondheim</Typography>
						</Grid>
					</Grid>
					<Grid id="bottom-row" item>
						<Grid item xs={12} marginLeft="20px">
							<Typography fontSize={12} fontWeight={600}>
								Kontakt Oss
							</Typography>
						</Grid>
						<Grid item xs={12} marginLeft="20px">
							<Typography fontSize={10}>Tlf: 90456088</Typography>
						</Grid>
						<Grid item xs={12} marginLeft="20px">
							<Typography fontSize={10}>E-Post: kundeservice@swap.no</Typography>
						</Grid>
						<Grid item xs={12} marginLeft="20px">
							<Typography fontSize={10}>
								Teknisk Kundestøtte: teknisk@swap.no
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</footer>
	);
};

export default Footer;
