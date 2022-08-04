import styles from "./styles.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import BackgroundImage from "../assets/laya-clode-Zf4yTni1CWg-unsplash.jpg";

//Function for signing up
const Signup = () => {
	// Hover state for buttons
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	// set initial form state
	const [userFormData, setUserFormData] = useState({ username: "", email: "", password: "" });

	const [error, setError] = useState("");

	// set state for form validation
	const [validated] = useState("false");
	//mutation
	const [addUser] = useMutation(ADD_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	//Event handler for form submission
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await addUser({
				variables: { ...userFormData },
			});
			Auth.login(data.addUser.token);
		} catch (error) {
			if (error.response && error.response.status >= 400 && error.response.status <= 500) {
				setError(error.response.userFormData.message);
			}
		}
		//Set user data
		setUserFormData({
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
			<div className={styles.signup_container}>
				<img src={BackgroundImage} alt="image" height="2500" className={styles.image} />
				<div className={styles.signup_form_container}>
					<div className={styles.left}>
						<h1>Welcome Back</h1>
						<NavLink to="/mood-tracker/login">
							<button type="button" className={styles.white_btn}>
								Login
							</button>
						</NavLink>
					</div>
					<div className={styles.right}>
						<form className={styles.form_container} noValidate validated={validated} onSubmit={handleFormSubmit}>
							<h1 className={styles.title}>Create Account</h1>
							<input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={userFormData.username} required className={styles.input} />
							<input type="email" placeholder="Email" name="email" onChange={handleInputChange} value={userFormData.email} required className={styles.input} />
							<input type="password" placeholder="Password" name="password" onChange={handleInputChange} value={userFormData.password} required className={styles.input} />
							{error && <div className={styles.error_msg}>{error}</div>}
							<button disabled={!(userFormData.username && userFormData.email && userFormData.password)} type="submit" className={styles.green_btn}>
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
