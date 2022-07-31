import styles from "./styles.module.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import BackgroundImage from "../assets/laya-clode-Zf4yTni1CWg-unsplash.jpg";

const Signup = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState("");

	const [addUser] = useMutation(ADD_USER);

	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3002/api/users";
			// const { data: res } = await axios.post(url, data);
			const { data: res } = await addUser({ variables: { ...data } });
			navigate("mood-tracker/login");
			console.log(res.message);
			// const { data } = await addUser({
			// 	variables: { ...data },
			// });
			Auth.login(data.addUser.token);
		} catch (error) {
			if (error.response && error.response.status >= 400 && error.response.status <= 500) {
				setError(error.response.data.message);
			}
		}
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
						<Link to="mood-tracker/login">
							<button type="button" className={styles.white_btn}>
								Login
							</button>
						</Link>
					</div>
					<div className={styles.right}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h1 className={styles.title}>Create Account</h1>
							<input type="text" placeholder="Username" name="username" onChange={handleChange} value={data.username} required className={styles.input} />
							<input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className={styles.input} />
							<input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className={styles.input} />
							{error && <div className={styles.error_msg}>{error}</div>}
							<button type="submit" className={styles.green_btn}>
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
