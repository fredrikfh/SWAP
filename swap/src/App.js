import React from "react";
import "./style/styles.css";
import "date-fns";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardOverview from "./pages/CardOverview";
import Profile from "./pages/Profile";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/register" element={<RegisterForm />} />
					<Route path="/" element={<CardOverview />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}
