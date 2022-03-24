import React from "react";
import "./style/styles.css";
import "date-fns";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardOverview from "./pages/CardOverview";
import ProfilePage from "./pages/ProfilePage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Container from "@mui/material/Container";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route
							path="/profile"
							element={
								<React.Fragment>
									<Navbar />
									<ProfilePage />
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
									<Footer />
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
									<Footer />
								</React.Fragment>
							}
						/>
						<Route
							path="/"
							element={
								<React.Fragment>
									<Navbar />
									<CardOverview />
									<Footer />
								</React.Fragment>
							}
						/>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</React.Fragment>
	);
}
