import {
	Box,
	Button,
	Container,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import SvgRenderer from "../shared/components/SvgRenderer";
import signImage from "../shared/assets/signup.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Logo from "../shared/assets/logo.svg";
import Angle from "../shared/assets/angle.svg";

export const Signup = () => {
	const styles = {
		paperContainer: {
			backgroundImage: `url(${signImage})`,
			height: "100vh",
			borderRadius: 0,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	};

	return (
		<Container sx={{ overflow: "hidden", height: "100vh" }} maxWidth='xl'>
			<Grid container sx={{ width: "100vw", height: "100vh" }}>
				<Grid item xs={6}>
					<Box
						sx={{ width: "90%", height: "100%", marginX: "auto", marginY: 5 }}>
						<Box
							display='flex'
							flexDirection={"column"}
							sx={{ height: "100px" }}>
							<Typography variant='h4' fontWeight={600} my={1}>
								Sign Up
							</Typography>
							<Typography variant='subtitle2' color='#808080' mb={1}>
								Sign Up for an amazing experience.
							</Typography>
						</Box>
						<Container
							sx={{
								alignItems: "center",
								display: "flex",
								height: "600px",
								width: "100%",
								justifyContent: "flex-start",
							}}>
							<Box
								display='flex'
								flexDirection={"column"}
								height='400px'
								width='60%'
								justifyContent={"space-around"}
								component='form'
								noValidate
								autoComplete='off'>
								<TextField
									id='outlined-basic'
									label='Email'
									variant='outlined'
									required
								/>
								<TextField
									id='outlined-basic'
									type="password"
									label='Password'
									variant='outlined'
									required
								/>
								<TextField
									id='outlined-basic'
									type="password"
									label='Confirm Password'
									variant='outlined'
									required
								/>
								<Button
									variant='outlined'
									endIcon={<ArrowForwardIcon />}
									sx={{
										width: "120px",
										color: "#1976D2",
										borderColor: "#1976D2",
									}}>
									Sign Up
								</Button>
								<Box>
									<Typography variant='subtitle2' color='#808080' my={3}>
										Already have an account&nbsp;
										<Link href='#' color='secondary.main'>
											Sign In
										</Link>
									</Typography>
								</Box>
							</Box>
						</Container>
					</Box>
				</Grid>
                <Grid item xs={0} md={6} sx={{ position: "relative" }}>
					<Paper style={styles.paperContainer}>
						<Box sx={{ width: "60%", height: "max-content" }}>
							<Typography
								sx={{ textDecoration: "line-through", fontSize: "65px" }}
								color={"#94DBFF"}>
								Seeing
							</Typography>
							<Typography color={"#ffffff"} sx={{ fontSize: "55px" }}>
								Access the world from a different angle
							</Typography>
							<SvgRenderer filePath={Angle} />
						</Box>
						<Box
							sx={{
								position: "absolute",
								bottom: 25,
								width: "max-content",
								right: 40,
							}}>
							<SvgRenderer filePath={Logo} />
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};
