import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { createUser } from "../utils/API";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar/index";
import { Sidebar } from "../components/Sidebar";
import { Hero } from "../components/HomePage";
import styled from "styled-components";

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

	const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
	`;

	const handleForm = async (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.validation() === false) {
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
			{/* <Form noValidate validated={validated} onSubmit={handleForm}></Form> */}{" "}
			<div>
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<Wrapper>
					<Navbar toggle={toggle} />
					<Hero />
				</Wrapper>
			</div>
		</>
	);
};

export default SignUp;
