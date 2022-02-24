import React from "react";
import "./style/styles.css";
import "date-fns";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardOverview from "./pages/CardOverview";
import Profile from "./pages/Profile";

export default function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/" element={<CardOverview />} />
					<Route path="/" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}
