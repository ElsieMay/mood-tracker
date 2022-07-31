import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import Navbar from "../components/Navbar/index";
import { Sidebar } from "../components/Sidebar";
// import { Form, Alert, Button } from "react-bootstrap";
import { Icon } from "../components/Sidebar/SidebarElements";
import MainLogo from "../components/assets/mood-logo.png";
import { NavLogo } from "../components/Navbar/NavbarElements";
import HeroSignUp from "../components/SignUp/index";
// import { Grid, TextField, Button, Card, CardContent, Typography } from "@material-ui/core";
// import { Grid, Button, Typography } from "@mui/material";

const SignUp = () => {
	const [userData, setUserData] = useState({ username: "", email: "", password: "" });
	const [validated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [addUser] = useMutation(ADD_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserData({ ...userData, [name]: value });
	};

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const handleForm = async (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const { data } = await addUser({
				variables: { ...userData },
			});
			Auth.login(data.addUser.token);
		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}

		setUserData({
			username: "",
			email: "",
			password: "",
		});
	};
	return (
		<>
			<div>
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<div>
					<Navbar toggle={toggle} />
				</div>
			</div>
			<HeroSignUp />
			{/* <div>
				<NavLogo to="/mood-tracker">
					<img src={MainLogo} alt="logo" width="110px" />
				</NavLogo>
				<Form noValidate validated={validated} onSubmit={handleForm} className="signup-form">
					<Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
						Please try again
					</Alert>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="username">Username</Form.Label>
						<Form.Control type="text" placeholder="Your username" name="username" onChange={handleInputChange} value={userData.username} required />
						<Form.Control.Feedback type="invalid">Please enter a username</Form.Control.Feedback>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="email">Email</Form.Label>
						<Form.Control type="email" placeholder="Your email address" name="email" onChange={handleInputChange} value={userData.email} required />
						<Form.Control.Feedback type="invalid">Please enter an email</Form.Control.Feedback>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="password">Password</Form.Label>
						<Form.Control type="password" placeholder="Your password" name="password" onChange={handleInputChange} value={userData.password} required />
						<Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
					</Form.Group>
					<Button disabled={!(userData.username && userData.email && userData.password)} type="submit" variant="success">
						Submit
					</Button>
				</Form>
			</div> */}
			{/* <Grid>
				<Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
					<CardContent>
						<Typography gutterBottom variant="h5">
							Contact Us
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p" gutterBottom>
							Fill up the form and our team will get back to you within 24 hours.
						</Typography>
						<form>
							<Grid container spacing={1}>
								<Grid xs={12} sm={6} item>
									<TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
								</Grid>
								<Grid xs={12} sm={6} item>
									<TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
								</Grid>
								<Grid item xs={12}>
									<TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
								</Grid>
								<Grid item xs={12}>
									<TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
								</Grid>
								<Grid item xs={12}>
									<TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
								</Grid>
								<Grid item xs={12}>
									<Button type="submit" variant="contained" color="primary" fullWidth>
										Submit
									</Button>
								</Grid>
							</Grid>
						</form>
					</CardContent>
				</Card>
			</Grid> */}
		</>
	);
};

export default SignUp;
