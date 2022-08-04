import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { SAVE_MOOD } from "../../utils/mutations";
import { saveMoodIds, getSavedMoodIds } from "../../utils/localStorage";
import styles from "./styles.module.css";
import { deleteMoodId } from "../../utils/localStorage";
import { REMOVE_MOOD } from "../../utils/mutations";
import { FaSave } from "react-icons/fa";
import { format } from "date-fns";

const obj = [
	{
		moodId: "Q8",
		question: "How often have you been bothered by feeling down, depressed or hopeless?",
	},
	{
		moodId: "Q9",
		question: "How often have you had little interest or pleasure in doing things?",
	},
	{
		moodId: "Q10",
		question: "How often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
	},
	{
		moodId: "Q11",
		question: "How often have you been bothered by feeling tired or having little energy?",
	},
	{
		moodId: "Q12",
		question: "How often have you been bothered by poor appetite or overeating?",
	},
	{
		moodId: "Q13",
		question: "How often have you been bothered by feeling bad about yourself, or that you are a failure, or have let yourself or your family down?",
	},
	{
		moodId: "Q14",
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

export const QuestionComponentLow = ({ data, event, moodId }) => {
	// Query to get mood
	const [searchedMoods, setSearchedMoods] = useState([]);
	const savedMoodId = searchedMoods.find((mood) => mood.moodId === moodId);
	// create state to hold saved moodId values
	const [savedMoodIds, setSavedMoodIds] = useState(getSavedMoodIds());
	//mutation
	const [saveMood, err] = useMutation(SAVE_MOOD);
	// get token
	const token = Auth.loggedIn() ? Auth.getToken() : null;
	//Mutation to remove a mood
	const [deleteMood] = useMutation(REMOVE_MOOD);

	const [moodValue, setMoodValue] = useState([]);
	const values = [0, 1, 2, 3];
	// delete button styles
	const fontStyles = { color: "#e1b37f", fontSize: "40px", margin: "15" };

	const [btnColor, setBtnColor] = useState("#d6de88");
	// event handler
	const newHandleSubmit = async (event) => {
		event.preventDefault();
	};

	const fns = require("date-fns");

	const [active, setActive] = useState();
	// Event handler to handle user input
	const handleSubmit = async (event) => {
		try {
			const { moodData } = await saveMood({
				variables: {
					input: {
						moodId: data.moodId,
						value: parseInt(event.target.value),
						type: "low",
						date: fns.format(new Date(), "yyyy-MM-dd"),
					},
				},
			});

			setSavedMoodIds([...savedMoodIds, data.moodId]);
			setMoodValue([...moodValue, parseInt(event.target.value)]);
		} catch (err) {
			console.log(err);
		}
	};
	// Event handler to remove a mood
	const handleDeleteMood = async (moodId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			const { data } = await deleteMood({
				variables: { moodId },
			});
			// upon success, remove mood's id from localStorage
			deleteMoodId(data.moodId);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<form id="form" onSubmit={newHandleSubmit}>
			<div className="grid gap-4">
				<h3 className="text-md">{data.question ?? ""}</h3>
				<h3>Please enter between 0-3 for how much this applied to you today</h3>
				<div className={styles.submit_btn}>
					{values.map((value) => (
						<button
							key={value._id}
							value={value}
							className={styles.value_button}
							disabled={active}
							onClick={(e) => {
								handleSubmit(e);
								btnColor === "#37704f" ? setBtnColor("#d6de88") : setBtnColor("#37704f");
							}}
							style={{ backgroundColor: btnColor }}
						>
							{savedMoodIds?.some((savedMoodId) => savedMoodId === moodId) ? "This mood has already been saved!" : value}
						</button>
					))}
				</div>
				<button className={styles.delete_button} onClick={() => handleDeleteMood(data.moodId)}>
					<FaSave style={fontStyles} />
					Undo your selection
				</button>
			</div>
			<br />
			<br />
		</form>
	);
};
