import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { SAVE_MOOD } from "../../utils/mutations";
import { saveMoodIds, getSavedMoodIds } from "../../utils/localStorage";
import styles from "./styles.module.css";
import { deleteMoodId } from "../../utils/localStorage";
import { REMOVE_MOOD } from "../../utils/mutations";
import { GET_MY_MOOD } from "../../utils/queries";
import { FaSave } from "react-icons/fa";
import { format } from "date-fns";

const obj = [
	{
		moodId: "Q1",
		question: "Have you had an anxiety attack (suddenly feeling fear or panic)?",
	},
	{
		moodId: "Q2",
		question: "How often have you been bothered by feeling nervous, anxious or on edge?",
	},
	{
		moodId: "Q3",
		question: "How often have you been bothered by not being able to stop or control worrying?",
	},
	{
		moodId: "Q4",
		question: "How often have you been bothered by worrying too much about different things?",
	},
	{
		moodId: "Q5",
		question: "How often have you been bothered by feeling nervous, anxious or on edge?",
	},
	{
		moodId: "Q6",
		question: "How often have you been bothered by not being able to stop or control worrying?",
	},
	{ moodId: "Q7", question: "How often have you been bothered by having trouble relaxing?" },
];

export const AnxiousnessForm = () => {
	return (
		<>
			{obj.map((v, i) => (
				<QuestionComponentAnxiousness key={i} data={v}></QuestionComponentAnxiousness>
			))}
		</>
	);
};

const QuestionComponentAnxiousness = ({ data, event, moodId }) => {
	const { loading, dataAnxious } = useQuery(GET_MY_MOOD);
	console.log(data);
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

	const [deleteMood] = useMutation(REMOVE_MOOD);
	// console.log(state);
	// useEffect(() => {
	// 	return () => saveMoodIds(savedMoodIds);
	// });

	// if (!token) {
	// 	return false;
	// }
	const [moodValue, setMoodValue] = useState([]);
	const values = [0, 1, 2, 3];

	const fontStyles = { color: "#e1b37f", fontSize: "40px", margin: "15" };

	const [btnColor, setBtnColor] = useState("#d6de88");

	const newHandleSubmit = async (event) => {
		event.preventDefault();
	};

	const fns = require("date-fns");
	// console.log(fns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS"));

	const [active, setActive] = useState();

	const handleSubmit = async (event) => {
		setActive(moodValue);
		// event.preventDefault();
		console.log("EVENT!!!!", event.target.value);
		try {
			const { moodData } = await saveMood({
				variables: {
					input: {
						moodId: data.moodId,
						value: parseInt(event.target.value),
						type: "anxious",
						date: fns.format(new Date(), "yyyy-MM-dd"),
					},
				},
			});
			console.log("THIS IS DATA", data);
			setSavedMoodIds([...savedMoodIds, data.moodId]);
			setMoodValue([...moodValue, parseInt(event.target.value)]);
			console.log("found mood", saveMood);
			console.log("mood value", moodValue);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDeleteMood = async (moodId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			const { data } = await deleteMood({
				variables: { moodId },
			});
			// upon success, remove book's id from localStorage
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
