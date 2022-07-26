import Background from "../components/assets/laya-clode-Zf4yTni1CWg-unsplash.jpg";
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
		</div>
	);
};
