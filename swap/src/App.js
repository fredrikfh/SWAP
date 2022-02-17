import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardOverview from "./pages/CardOverview";

export default function App() {
	return (
		<React.Fragment>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CardOverview />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}
