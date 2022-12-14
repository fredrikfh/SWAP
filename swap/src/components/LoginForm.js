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
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Joi from "joi-browser";
import "../style/styles.css";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {
	const navigate = useNavigate();

	const { login, currentUser, logout } = useAuth();

	const [userState, setUserState] = useState({
		userS: { email: "", password: "" },
		errors: {},
	});

	const [visible, setVisibility] = useState({
		showPassword: false,
	});

	const schema = {
		email: Joi.string().required().label("Epost"),
		password: Joi.string().required().label("Passord"),
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

	const handleRegister = () => {
		navigate("/register");
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const errors = { ...userState };
		errors["errors"] = validate() || {};
		setUserState(errors);
		if (!validate()) {
			try {
				login(userState.userS.email, userState.userS.password).then((cred) => {
					console.log("currentuser is now:" + currentUser.uid);
					navigate("/");
				});
				console.log(currentUser?.password);
			} catch (error) {
				console.log(error.message);
			}
		}

		console.log("Logging in");
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

	const handleVisible = () => {
		const showPassword = !visible.showPassword;
		setVisibility({ showPassword });
	};

	const { userS, errors } = userState;

	return (
		<Card
			sx={{
				width: "500px",
				margin: "3em 0 0 0",
				borderRadius: "1em",
				padding: "16px 16px 32px 16px",
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
				<Typography variant="h5" sx={{ marginTop: "1em" }}>
					Logg inn
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
					type={visible.showPassword ? "text" : "password"}
					value={userS.password}
					onChange={handleChange}
					name="password"
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
				<Button
					disabled={validate() && true}
					onClick={handleLogin}
					sx={{
						marginTop: "1.5em",
						height: "3em",

						"&:disabled": {
							background: "#002b2b !important",
							opacity: "0.6 !important",
						},
					}}
					className="tealButtons"
					id="loginButton"
				>
					Logg inn
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

export default LoginForm;
