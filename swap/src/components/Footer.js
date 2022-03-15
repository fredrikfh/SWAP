import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
	return (
		<footer style={{ position: "fixed", bottom: 0 }}>
			<Box
				width="100vw"
				sx={{
					backgroundColor: "#ffe6cb",
					padding: "40px",
				}}
			>
				<Grid container spacing={0} marginLeft="20px">
					<img src="./logo/black_text.svg" style={{ height: "30px", margin: "15px" }} />
					<Grid id="top-row" item spacing={0}>
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
					<Grid id="bottom-row" item spacing={0}>
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
