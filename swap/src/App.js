import React from "react";
import "./style/styles.css";
import "date-fns";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardOverview from "./pages/CardOverview";
import Profile from "./pages/Profile";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Container from "@mui/material/Container";

export default function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route
						path="/profile"
						element={
							<React.Fragment>
								<Navbar />
								<Profile />
								<Footer />
							</React.Fragment>
						}
					/>
					<Route
						path="/login"
						element={
							<React.Fragment>
								<Container
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										width: "100vw;",
										height: "100vh",
									}}
								>
									<img src="./logo/main_text.svg" width="240px" />
									<LoginForm />
								</Container>
							</React.Fragment>
						}
					/>
					<Route
						path="/register"
						element={
							<React.Fragment>
								<Container
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										width: "100vw;",
										height: "100vh",
									}}
								>
									<img src="./logo/main_text.svg" width="240px" />
									<RegisterForm />
								</Container>
							</React.Fragment>
						}
					/>
					<Route
						path="/"
						element={
							<React.Fragment>
								<Navbar />
								<CardOverview />
							</React.Fragment>
						}
					/>
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}
