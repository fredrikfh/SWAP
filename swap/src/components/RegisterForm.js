import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import Joi from "joi-browser";
import "../style/styles.css";

const RegisterForm = () => {
	const navigate = useNavigate();

	const [userState, setUserState] = useState({
		user: { email: "", password: "", name: "", address: "" },
		errors: {},
	});

	const schema = {
		email: Joi.string().email().required().label("Epost"),
		password: Joi.string().min(8).required().label("Passord"),
		name: Joi.string().required().label("Navn"),
		address: Joi.string().required().label("Adresse"),
	};

	const validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(userState.user, schema, options);
		if (!error) return null;

		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
	};

	const validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schemaComp = { [name]: schema[name] };
		const { error } = Joi.validate(obj, schemaComp);
		return error ? error.details[0].message : null;
	};

	const handleChange = ({ currentTarget: input }) => {
		const errors = { ...userState.errors };
		const errorMessage = validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const user = { ...userState };
		user.user[input.name] = input.value;
		user.errors = errors;
		setUserState(user);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		const errors = { ...userState };
		errors["errors"] = validate() || {};
		setUserState(errors);
		if (validate()) return;

		console.log("Registered");
	};

	const handleLogin = () => {
		navigate("/login");
	};

	const { user, errors } = userState;

	return (
		<Card
			sx={{
				width: "500px",
				borderRadius: "1em",
				padding: "16px 16px 32px 16px",
				margin: "3em 0 0 0",
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
					value={user.email}
					onChange={handleChange}
					name="email"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<EmailIcon />
							</InputAdornment>
						),
					}}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				/>
				{errors.email && (
					<Typography
						variant="h7"
						sx={{
							color: "#D8000C",
							background: "#FFD2D2",
							borderRadius: "0.2em",
							marginTop: "0.2em",
						}}
					>
						{errors.email}
					</Typography>
				)}
				<TextField
					label="Passord"
					value={user.password}
					onChange={handleChange}
					name="password"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<PasswordIcon />
							</InputAdornment>
						),
					}}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				/>
				{errors.password && (
					<Typography
						variant="h7"
						sx={{
							color: "#D8000C",
							background: "#FFD2D2",
							borderRadius: "0.2em",
							marginTop: "0.2em",
						}}
					>
						{errors.password}
					</Typography>
				)}
				<TextField
					label="Navn"
					value={user.name}
					onChange={handleChange}
					name="name"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<BadgeIcon />
							</InputAdornment>
						),
					}}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				/>
				{errors.name && (
					<Typography
						variant="h7"
						sx={{
							color: "#D8000C",
							background: "#FFD2D2",
							borderRadius: "0.2em",
							marginTop: "0.2em",
						}}
					>
						{errors.name}
					</Typography>
				)}
				<TextField
					label="Adresse"
					value={user.address}
					onChange={handleChange}
					name="address"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<HomeIcon />
							</InputAdornment>
						),
					}}
					sx={{
						background: "#f0f0f0",
						marginTop: "1.5em",
					}}
				/>
				{errors.address && (
					<Typography
						variant="h7"
						sx={{
							color: "#D8000C",
							background: "#FFD2D2",
							borderRadius: "0.2em",
							marginTop: "0.2em",
						}}
					>
						{errors.address}
					</Typography>
				)}
				<Button
					disabled={validate() && true}
					onClick={handleRegister}
					sx={{
						marginTop: "1.5em",
						height: "3em",

						"&:disabled": {
							background: "#002b2b !important",
							opacity: "0.6 !important",
						},
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
