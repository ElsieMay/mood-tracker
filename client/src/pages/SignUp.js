import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import Navbar from "../components/Navbar/index";
import { Sidebar } from "../components/Sidebar";
import { Form, Alert, Button } from "react-bootstrap";
import { Icon } from "../components/Sidebar/SidebarElements";
import MainLogo from "../components/assets/mood-logo.png";
import { NavLogo } from "../components/Navbar/NavbarElements";
import HeroSignUp from "../components/SignUp/index";
import { SignUpForm, FormWrapper } from "../components/SignUp/SignUpElements";

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
		console.log("here");
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
			<div>
				<SignUpForm>
					<FormWrapper>
						<NavLogo to="/mood-tracker">
							<img src={MainLogo} alt="logo" width="110px" />
						</NavLogo>
						<Form noValidate validated={validated} onSubmit={handleForm}>
							<Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
								Please try again
							</Alert>
							<Form.Group className="mb-3">
								<Form.Label htmlFor="username">Username</Form.Label>
								<Form.Control type="text" placeholder="Your username" name="username" onChange={handleInputChange} value={userData.username} required />
								<Form.Control.Feedback type="invalid">Please enter a username</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label htmlFor="email">Email</Form.Label>
								<Form.Control type="email" placeholder="Your email address" name="email" onChange={handleInputChange} value={userData.email} required />
								<Form.Control.Feedback type="invalid">Please enter an email</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label htmlFor="password">Password</Form.Label>
								<Form.Control type="password" placeholder="Your password" name="password" onChange={handleInputChange} value={userData.password} required />
								<Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
							</Form.Group>
							<Button disabled={!(userData.username && userData.email && userData.password)} type="submit" variant="success">
								Submit
							</Button>
						</Form>
					</FormWrapper>
				</SignUpForm>
			</div>
		</>
	);
};

export default SignUp;
