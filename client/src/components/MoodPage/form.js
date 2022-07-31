import React from "react";
import { LowMoodForm } from "./LowMoodQuestions";
import { AnxiousnessForm } from "./AnxiousnessQuestions";

export default function MoodForm() {
	return (
		<>
			<div className="form max-w-sm mx-auto w-96">
				<LowMoodForm></LowMoodForm>
				<AnxiousnessForm></AnxiousnessForm>
			</div>
		</>
	);
}
