import Container from "@mui/material/Container";
import Button from '@mui/material/Button'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Navbar() {
	return (
		<Container
			sx = {{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',

				marginTop: '1.5em',
				height: '65px',
				width: 'calc(100% - 8em)',
				maxWidth: '100% !important',
				marginLeft: '4em',
				marginRight: '4em !important',
				background: 'white'
			}}
		>
			<img 
				src='./logo/main_text.svg' 
				style = {{height: '40px'}}
			/>
			<Container
				sx={{
					display: 'flex',
					margin: '0',
					paddingRight: '0px !important',
					justifyContent: 'space-between',
					alignItems: 'center',

					width: 'fit-content',
				}}
			>
				<Button
					sx={{
						background: 'teal',
						color: 'white',
					}}
				>
					+ Opprett innlegg
				</Button>
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',

						paddingRight: '0px !important',
						width: 'fit-content',
					}}
				>
					<PersonOutlineIcon />
					<span>Brukernavn</span>
				</Container>
			</Container>
		</Container>
	)
}
