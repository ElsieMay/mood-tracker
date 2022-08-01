import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { SAVE_MOOD } from "../../utils/mutations";
import { saveMoodIds, getSavedMoodIds } from "../../utils/localStorage";

const obj = [
	{
		question: "How often have you been bothered by feeling down, depressed or hopeless?",
	},
	{
		question: "How often have you had little interest or pleasure in doing things?",
	},
	{
		question: "How often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
	},
	{
		question: "How often have you been bothered by feeling tired or having little energy?",
	},
	{
		question: "How often have you been bothered by poor appetite or overeating?",
	},
	{
		question: "How often have you been bothered by feeling bad about yourself, or that you are a failure, or have let yourself or your family down?",
	},
	{
		question: "How often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?",
	},
];

export const LowMoodForm = () => {
	return (
		<>
			{obj.map((v, i) => (
				<QuestionComponentLow key={i} data={v}></QuestionComponentLow>
			))}
		</>
	);
};

const QuestionComponentLow = ({ data, event, moodId }) => {
	// event.preventDefault();
	// export const QuestionComponentLow = ({ data }) => {
	// const { register, handleSubmit, resetField } = useForm();

	const [searchedMoods, setSearchedMoods] = useState([]);
	const savedMoodId = searchedMoods.find((mood) => mood.moodId === moodId);
	// create state to hold saved moodId values
	const [savedMoodIds, setSavedMoodIds] = useState(getSavedMoodIds());
	//mutation
	const [saveMood, err] = useMutation(SAVE_MOOD);
	// get token
	const token = Auth.loggedIn() ? Auth.getToken() : null;

	useEffect(() => {
		return () => saveMoodIds(savedMoodIds);
	});

	// if (!token) {
	// 	return false;
	// }

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await saveMood({
				variables: {
					input: { ...savedMoodId },
				},
			});
			setSavedMoodIds([...savedMoodIds, savedMoodId.moodId]);
		} catch (err) {
			// console.log(err);
		}
	};

	return (
		<form id="form" onSubmit={handleSubmit}>
			<div className="grid gap-4">
				<h3 className="text-md">{data.question ?? ""}</h3>
				<h3>Please enter between 0-3 for how much this applied to you today</h3>
				<div className="input-group">
					<input type="text" placeholder="Amount" className="form-inputmt-1 block w-full py-2.5 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm" />
				</div>

				<div className="submit-btn">
					<button
						className="border py-2 text-white bg-green-500 w-full btn-block btn-info"
						disabled={savedMoodIds?.some((savedMoodId) => savedMoodId === moodId)}
						//onClick={() => handleSaveMood(mood.moodId)}
					>
						{savedMoodIds?.some((savedMoodId) => savedMoodId === moodId) ? "This mood has already been saved!" : "Save your mood"}
					</button>
				</div>
			</div>
		</form>
	);
};
