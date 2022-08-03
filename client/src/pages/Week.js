import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import { Sidebar } from "../components/Sidebar";
import WeekPage from "../components/Week";
import styled from "styled-components";

const Week = () => {
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
			<WeekPage></WeekPage>
		</div>
	);
};

export default Week;
