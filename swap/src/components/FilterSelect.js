import React from "react";
import { useState } from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function FilterSelect(props) {
	const [type, setType] = useState("");

	function handleTypeChange(event) {
		setType(event.target.value);
	}

	return (
		<Select
			sx={{
				height: "2.2em",
				padding: "0 0.4em 0 0.4em",
				border: "none",
				borderRadius: "1.1em",
				background: "#ffe6cb",
			}}
			value={type}
			onChange={handleTypeChange}
			displayEmpty
		>
			{props.options.map((option, index) => {
				return (
					<MenuItem key={index} value={index === 0 ? "" : index}>
						{option}
					</MenuItem>
				);
			})}
		</Select>
	);
}
