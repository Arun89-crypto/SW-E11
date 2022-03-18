import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Switch,
	TextField,
	Grid,
	Typography,
} from "@mui/material";
import { UserCircle as UserCircleIcon } from "../assets/UserCircle";
import ProfilePic from "../assets/profile.jpg";

import React from "react";

export const Profile = (props: any) => {
	const user = {
		avatar: ProfilePic,
		name: "Anika Visser",
	};

	return (
		<Box sx={{ mt: 4 }} {...props}>
			<Card sx={{ width: "90%" }}>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={4} xs={12}>
							<Typography variant='h6'>Basic details</Typography>
							<Box
								sx={{
									alignItems: "center",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									height: "100%",
								}}>
								<Avatar
									src={user.avatar}
									sx={{
										height: 150,
										mb: 4,
										width: 150,
									}}>
									<UserCircleIcon fontSize='small' />
								</Avatar>
								<Button>Change</Button>
							</Box>
						</Grid>
						<Grid item md={8} xs={12}>
							<Box
								sx={{
									display: "flex",
									mt: 3,
									alignItems: "center",
								}}>
								<TextField
									defaultValue={user.name}
									label='Full Name'
									size='small'
									sx={{
										flexGrow: 1,
										mr: 3,
									}}
								/>
								<Button
									variant='outlined'
									sx={{
										width: "140px",
										color: "#1976D2",
										fontWeight: 200,
										borderColor: "#1976D2",
									}}>
									Save
								</Button>
							</Box>
							<Box
								sx={{
									display: "flex",
									mt: 3,
									alignItems: "center",
								}}>
								<TextField
									defaultValue=''
									label='Phone Number'
									size='small'
									sx={{
										flexGrow: 1,
										mr: 1.5,
									}}
								/>
								<TextField
									defaultValue='janedoe@user.com'
									disabled
									label='Email Address'
									required
									size='small'
									sx={{
										flexGrow: 1,
										ml: 1.5,
										"& .MuiOutlinedInput-notchedOutline": {
											borderStyle: "dashed",
										},
									}}
								/>
							</Box>
							<Box
								sx={{
									display: "flex",
									mt: 3,
									alignItems: "center",
								}}>
								<TextField
									defaultValue=''
									label='Country'
									size='small'
									sx={{
										flexGrow: 1,
										mr: 1.5,
									}}
								/>
								<TextField
									defaultValue=''
									label='Address'
									size='small'
									sx={{
										flexGrow: 1,
										ml: 1.5,
									}}
								/>
							</Box>
							<Box
								sx={{
									display: "flex",
									mt: 3,
									justifyContent: "space-between",
								}}>
								<TextField
									defaultValue=''
									label='State/Province'
									size='small'
									sx={{
										flexGrow: 1,
										mr: 1.5,
									}}
								/>
								<TextField
									defaultValue=''
									label='City'
									size='small'
									sx={{
										flexGrow: 1,
										ml: 1.5,
									}}
								/>
							</Box>
							<Box
								sx={{
									display: "flex",
									mt: 3,
									alignItems: "center",
								}}>
								<TextField
									fullWidth
									multiline
									minRows={4}
									maxRows={4}
									label='Bio'
								/>
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			<Card sx={{ mt: 4, width: "90%" }}>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={4} xs={12}>
							<Typography variant='h6'>Public profile</Typography>
						</Grid>
						<Grid item md={8} sm={12} xs={12}>
							<Box
								sx={{
									alignItems: "center",
									display: "flex",
									justifyContent: "space-between",
									mb: 3,
								}}>
								<div>
									<Typography variant='subtitle1'>
										Make Account Private
									</Typography>
								</div>
                <Switch defaultChecked color="secondary"/>
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			<Card sx={{ mt: 4, width: "90%" }}>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={4} xs={12}>
							<Typography variant='h6'>Delete Account</Typography>
						</Grid>
						<Grid item md={8} xs={12}>
							<Typography sx={{ mb: 3 }} variant='subtitle1'>
								Delete your account and all of your source data. This is
								irreversible.
							</Typography>
							<Button color='error' variant='outlined'>
								Delete account
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Box>
	);
};
