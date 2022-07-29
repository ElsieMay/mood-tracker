import React, { useState } from "react";
import { Button } from "../Button";
import { ArrowForward, ArrowRight } from "../HomePage/HomePageElements";

const Form = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};
	return (
		<div className="form max-w-sm mx-auto w-96">
			<h1 className="font-bold pb-4 text-xl">Question 1</h1>
			<form id="form">
				<div className="grid gap-4">
					<h4>How often have you been bothered by feeling down, depressed or hopeless?</h4>
					<select className="form-input">
						<option value="Never">Never</option>
						<option value="Sometimes">Sometimes</option>
						<option value="Frequently">Frequently</option>
						<option value="Always">Always</option>
					</select>
					<div className="submit-btn">
						<Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
							Submit{hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
