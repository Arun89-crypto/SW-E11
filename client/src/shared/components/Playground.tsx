import {
	Button,
	Container,
	Grid,
	Typography,
	Box,
	TextField,
} from "@mui/material";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import { EmojiPickers } from "./EmojiPickers";
import React from "react";
import MultipleSelectChip from "./MuiSelect";

export const Playground = () => {
	return (
		<Container
			sx={{
				my: 4,
				p: 2,
				display: "flex",
				alignItems: "flex-start",
				flexDirection: "column",
				justifyContent: "flex-start",
				overflowY: "auto",
				overflowX: "hidden",
				maxHeight: "100vh",
				position: "relative",
			}}>
			<Grid container sx={{ width: "90vw", mb: 6 }}>
				<Grid item xs={8}>
					<Typography variant='h5' fontWeight={600} my={1}>
						Playground
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Button
						variant='outlined'
						endIcon={<ScoreboardIcon />}
						sx={{
							width: "140px",
							color: "#000000",
							fontWeight: 200,
							borderColor: "#000000",
						}}>
						2578 pts.
					</Button>
				</Grid>
			</Grid>
			<Container sx={{ my: 4 }}>
				<Box display='flex' flexDirection={"column"} sx={{ height: "100px" }}>
					<Typography variant='h6' fontWeight={600} my={1}>
						Text to Speech
					</Typography>
					<Typography variant='subtitle2' color='#808080' mb={1}>
						Click on the picture or text to play the sound
					</Typography>
				</Box>
				<Grid container columnGap={6} sx={{ width: "100vw" }}>
					<Grid
						item
						xs={2}
						sx={{
							backgroundColor: "#C4C4C4",
							height: "200px",
							borderRadius: "10px",
						}}></Grid>
					<Grid
						item
						xs={2}
						sx={{
							backgroundColor: "#C4C4C4",
							height: "200px",
							borderRadius: "10px",
						}}></Grid>
				</Grid>
				<br />
				<br />
				<Grid container columnGap={6} sx={{ width: "100vw" }}>
					<Grid
						item
						xs={2}
						sx={{
							backgroundColor: "#C4C4C4",
							height: "200px",
							borderRadius: "10px",
						}}></Grid>
					<Grid
						item
						xs={2}
						sx={{
							backgroundColor: "#C4C4C4",
							height: "200px",
							borderRadius: "10px",
						}}></Grid>
				</Grid>
			</Container>
			<Container sx={{ my: 4 }}>
				<Box display='flex' flexDirection={"column"} sx={{ height: "100px" }}>
					<Typography variant='h6' fontWeight={600} my={1}>
						Your Mood
					</Typography>
					<Typography variant='subtitle2' color='#808080' mb={1}>
						Click on the emoji which resembles your mood
					</Typography>
				</Box>
				<Grid container columnGap={6} sx={{ width: "100vw" }}>
					<EmojiPickers />
				</Grid>
				<Grid container sx={{ my: 6 }}>
					<MultipleSelectChip />
				</Grid>
				<Button
				variant='outlined'
				sx={{
					width: "200px",
					color: "#1976D2",
					fontWeight: 200,
					borderColor: "#1976D2",
					my: 3,
					mx: 1
				}}>
				Share your routine
			</Button>
			</Container>
		</Container>
	);
};
