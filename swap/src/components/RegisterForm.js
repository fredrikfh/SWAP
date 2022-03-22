import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Joi from "joi-browser";
import "../style/styles.css";

import { auth, createUserDocument } from "../firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

const RegisterForm = () => {
	const navigate = useNavigate();

	const [userState, setUserState] = useState({
		userS: { email: "", password: "", name: "", tlfNr: "" },
		errors: {},
	});

	const [visible, setVisibility] = useState({
		showPassword: false,
	});

	const [currentUser, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const schema = {
		email: Joi.string().email().required().label("Epost"),
		password: Joi.string().min(8).required().label("Passord"),
		name: Joi.string().required().label("Navn"),
		tlfNr: Joi.number().integer().required().label("Telefonnummer"),
	};

	const validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(userState.userS, schema, options);
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
		user.userS[input.name] = input.value;
		user.errors = errors;
		setUserState(user);
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		const errors = { ...userState };
		errors["errors"] = validate() || {};
		setUserState(errors);
		if (!validate()) {
			const newName = userState.userS.name;
			const newTlfNr = userState.userS.tlfNr;
			try {
				const { user } = await createUserWithEmailAndPassword(
					auth,
					userState.userS.email,
					userState.userS.password
				);
				await updateProfile(user, {
					displayName: newName,
				});
				console.log(user.uid);
				await createUserDocument(user, { newName, newTlfNr }).then(navigate("/"));
				console.log(currentUser?.email);
			} catch (error) {
				console.log("error", error);
			}
		}
	};

	const handleLogin = () => {
		navigate("/login");
	};

	const handleVisible = () => {
		const showPassword = !visible.showPassword;
		setVisibility({ showPassword });
	};

	const { userS, errors } = userState;

	return (
		<Card
			sx={{
				width: "500px",
				borderRadius: "1em",
				padding: "16px 16px 32px 16px",
				margin: "3em 0 0 0",
				background: "rgba(255,255,255,0.6)",
				backdropFilter: "blur( 9px )",
			}}
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Typography variant="h5" sx={{ marginTop: "24px" }}>
					Registrer Bruker
				</Typography>
				<TextField
					label="Epost"
					value={userS.email}
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
					value={userS.password}
					onChange={handleChange}
					name="password"
					type={visible.showPassword ? "text" : "password"}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								{visible.showPassword ? (
									<Visibility
										onClick={handleVisible}
										style={{ cursor: "pointer" }}
									/>
								) : (
									<VisibilityOff
										onClick={handleVisible}
										style={{ cursor: "pointer" }}
									/>
								)}
							</InputAdornment>
						),
					}}
					style={{ cursor: "pointer" }}
					sx={{
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
					value={userS.name}
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
					label="Telefonnummer"
					value={userS.tlfNr}
					onChange={handleChange}
					name="tlfNr"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<HomeIcon />
							</InputAdornment>
						),
					}}
					sx={{
						marginTop: "1.5em",
					}}
				/>
				{errors.tlfNr && (
					<Typography
						variant="h7"
						sx={{
							color: "#D8000C",
							background: "#FFD2D2",
							borderRadius: "0.2em",
							marginTop: "0.2em",
						}}
					>
						{errors.tlfNr}
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
