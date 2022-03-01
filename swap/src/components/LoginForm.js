import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "../style/styles.css";

const RegisterForm = () => {
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		email: "",
		password: "",
	});

	const handleRegister = () => {
		navigate("/register");
	};

	const handleLogin = () => {
		console.log("Logging in");
		console.log(formState);
	};

	const handleChangeEmail = (e) => {
		const obj = {
			...formState,
		};
		obj["email"] = e.target.value;
		setFormState(obj);
	};

	const handleChangePassword = (e) => {
		const obj = {
			...formState,
		};
		obj["password"] = e.target.value;
		setFormState(obj);
	};

	return (
		<Card
			sx={{
				maxWidth: "500px",
				margin: "auto",
				borderRadius: "1em",
				padding: "16px 16px 32px 16px",
			}}
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Typography variant="h5" sx={{ marginTop: "1em" }}>
					Logg inn
				</Typography>
				<TextField
					label="Epost"
					value={formState["email"]}
					onChange={handleChangeEmail}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				/>
				<TextField
					label="Passord"
					type="password"
					value={formState["password"]}
					onChange={handleChangePassword}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				></TextField>
				<Button
					onClick={handleLogin}
					sx={{
						marginTop: "1.5em",
						height: "3em",
					}}
					className="tealButtons"
				>
					{"Logg inn"}
				</Button>
				<Typography variant="p" sx={{ margin: "auto", marginTop: "1.5em" }}>
					Har du ikke en bruker?
				</Typography>
				<Button
					onClick={handleRegister}
					sx={{
						background: "#ffcf9c",
						color: "black",
						marginTop: "1em",
						height: "3em",

						"&:hover": {
							background: "#ffcf9c !important",
							opacity: "0.6 !important",
						},
					}}
				>
					Registrer bruker
				</Button>
			</Container>
		</Card>
	);
};

export default RegisterForm;
