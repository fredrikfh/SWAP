import * as React from "react";
import Avatar from "@mui/material/Avatar";

export default function NameAvatar(props) {
	if (props.name === null)
		return (
			<Avatar
				sx={{
					height: props.diameter,
					width: props.diameter,
				}}
			>
				X
			</Avatar>
		);

	function stringToColor(string) {
		let hash = 0;
		let i;

		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}

		let color = "#";

		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff;
			color += `00${value.toString(16)}`.substr(-2);
		}
		/* eslint-enable no-bitwise */

		return color;
	}

	function stringAvatar(name) {
		return {
			sx: {
				fontSize: props.diameter * 0.4,
				bgcolor: stringToColor(name),
				height: props.diameter,
				width: props.diameter,
			},
			children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
		};
	}

	const testArr = props.name.trim().split(" ");

	if (testArr.length === 2) return <Avatar {...stringAvatar(props.name)} />;
	return (
		<Avatar
			sx={{
				bgcolor: stringToColor(props.name),
				height: props.diameter,
				width: props.diameter,
			}}
		>
			{testArr[0][0]}
		</Avatar>
	);
}
