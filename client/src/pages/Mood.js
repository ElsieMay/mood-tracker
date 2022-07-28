import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import { Sidebar } from "../components/Sidebar";
import { Hero } from "../components/HomePage";
import styled from "styled-components";

const Mood = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
	`;

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Wrapper>
				<Navbar toggle={toggle} />
			</Wrapper>
			<div className="App">
				<div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
					<h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>

					<div className="grid md:grid-cols-2 gap-4">
						<Graph></Graph>

						<Form></Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mood;
