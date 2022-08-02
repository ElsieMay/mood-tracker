import styles from "./styles.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import BackgroundImage from "../assets/laya-clode-Zf4yTni1CWg-unsplash.jpg";

const Login = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [userFormData, setUserFormData] = useState({ email: "", password: "" });

	const [error, setError] = useState("");

	const [validated] = useState("false");

	const [loginUser] = useMutation(LOGIN_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			console.log(userFormData);
			const { data } = await loginUser({
				variables: { ...userFormData },
			});
			Auth.login(data.login.token);
		} catch (error) {
			if (error.response && error.response.status >= 400 && error.response.status <= 500) {
				setError(error.response.data.message);
			}
		}

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
			<div className={styles.login_container}>
				<img src={BackgroundImage} alt="image" height="2500" className={styles.image} />
				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} noValidate validated={validated} onSubmit={handleFormSubmit}>
							<h1 className={styles.title}>Login to Your Account</h1>
							<input type="email" placeholder="Email" name="email" onChange={handleInputChange} value={userFormData.email} required className={styles.input} />
							<input type="password" placeholder="Password" name="password" onChange={handleInputChange} value={userFormData.password} required className={styles.input} />
							{error && <div className={styles.error_msg}>{error}</div>}
							<button disabled={!(userFormData.email && userFormData.password)} type="submit" className={styles.green_btn}>
								Sign In
							</button>
						</form>
					</div>
					<div className={styles.right}>
						<h1>New Here ?</h1>
						<NavLink to="/mood-tracker/signup">
							<button type="button" className={styles.white_btn}>
								Sign Up
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
