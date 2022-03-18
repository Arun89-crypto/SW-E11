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
import MultipleSelectChip from "./MuiSelect";
import { useSpeechSynthesis } from "react-speech-kit";
import SvgRenderer from "./SvgRenderer";
import Toilet from "../assets/toilet.jpg";
import Toothbrush from "../assets/toothbrush.jpg";
import Towel from "../assets/towel.jpg";
import Help from "../assets/help.jpg";

export const Playground = () => {
	const { speak } = useSpeechSynthesis();

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
						}}
						onClick={() => speak({ text: "toothbrush" })}>
						<img
							src={Toothbrush}
							alt='toothbrush'
							className='rounded-lg h-[200px] w-full'
						/>
					</Grid>
					<Grid
						item
						xs={2}
						sx={{
							backgroundColor: "#C4C4C4",
							height: "200px",
							borderRadius: "10px",
						}}
						onClick={() => speak({ text: "towel" })}>
						<img
							src={Towel}
							alt='towel'
							className='rounded-lg h-[200px] w-full'
						/>
					</Grid>
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
						}}
						onClick={() => speak({ text: "I need your help" })}>
						<img
							src={Help}
							alt='help'
							className='rounded-lg h-[200px] w-full'
						/>
					</Grid>
					<Grid
						item
						xs={2}
						sx={{
							backgroundColor: "#C4C4C4",
							height: "200px",
							borderRadius: "10px",
						}}
						onClick={() => speak({ text: "toilet" })}>
						<img
							src={Toilet}
							alt='toilet'
							className='rounded-lg h-[200px] w-full'
						/>
					</Grid>
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
				<TextField
					multiline
					minRows={4}
					maxRows={4}
					label='What changed your mood?'
					sx={{ width: "280px", my: 3 }}
				/>
			</Container>
			<Container sx={{ my: 4 }}>
				<Box display='flex' flexDirection={"column"} sx={{ height: "100px" }}>
					<Typography variant='h6' fontWeight={600} my={1}>
						Your Daily Routine
					</Typography>
					<Typography variant='subtitle2' color='#808080' mb={1}>
						You can write your chores and even share wiith your friends on feed.
					</Typography>
				</Box>
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
						mx: 1,
					}}>
					Share your routine
				</Button>
			</Container>
		</Container>
	);
};
