import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const RegisterForm = () => {
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		email: "",
		password: "",
		name: "",
		address: "",
	});

	const handleRegister = () => {
		console.log("Register");
	};

	const handleLogin = () => {
		navigate("/login");
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

	const handleChangeName = (e) => {
		const obj = {
			...formState,
		};
		obj["name"] = e.target.value;
		setFormState(obj);
	};

	const handleChangeAddress = (e) => {
		const obj = {
			...formState,
		};
		obj["address"] = e.target.value;
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
				<Typography variant="h5">Registrer Bruker</Typography>
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
					value={formState["password"]}
					onChange={handleChangePassword}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				/>
				<TextField
					label="Navn"
					value={formState["name"]}
					onChange={handleChangeName}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				/>
				<TextField
					label="Adresse"
					value={formState["address"]}
					onChange={handleChangeAddress}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				/>
				<Button
					onClick={handleRegister}
					sx={{
						marginTop: "1.5em",
						height: "3em",
					}}
					className="tealButtons"
				>
					Registrer bruker
				</Button>
				<Typography variant="p" sx={{ margin: "auto", marginTop: "1.5em" }}>
					Har du allerede en bruker?
				</Typography>
				<Button
					onClick={handleLogin}
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
					Logg inn her
				</Button>
			</Container>
		</Card>
	);
};

export default RegisterForm;
