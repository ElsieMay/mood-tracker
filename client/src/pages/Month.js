import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import { Sidebar } from "../components/Sidebar";
import MonthPage from "../components/Month";
import styled from "styled-components";

const Month = () => {
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
			<MonthPage></MonthPage>
		</div>
	);
};

export default Month;
