import React from "react";
import { QuestionComponentLow } from "./LowMoodQuestions";
import { QuestionComponentAnxiousness } from "./AnxiousnessQuestions";

export default function MoodForm() {
	return (
		<>
			<QuestionComponentLow />
			<QuestionComponentAnxiousness />
		</>
	);
}
