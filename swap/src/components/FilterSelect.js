import React from "react";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function FilterSelect(props) {
	const [selection, changeSelection] = useState(props.options[0]);

	function handleChange(event) {
		props.onItemSelect(event.target.value);
		changeSelection(event.target.value);
	}

	return (
		<FormControl>
			<Select
				sx={{
					height: "2.2em",
					padding: "0 0.4em 0 0.4em",
					border: "none",
					borderRadius: "1.1em",
				}}
				value={selection}
				onChange={handleChange}
			>
				{props.options.map((option, index) => {
					return (
						<MenuItem key={index} value={option}>
							{option}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
}
