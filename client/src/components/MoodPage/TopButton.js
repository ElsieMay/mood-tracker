import React, { View } from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./styles.module.css";

const TopButton = () => {
	const [isVisable, setIsVisable] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisable(true);
		} else {
			setIsVisable(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="fixed bottom-2 right-2">
			<button type="button" onClick={scrollToTop} className={"inline-flex items-center p-3 rounded-full shadow-sm text-white bg-pink-600 transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"}>
				<FaArrowUp className="h-6 w-6" aria-hidden="true" />
			</button>
		</div>
	);
};

export default TopButton;
