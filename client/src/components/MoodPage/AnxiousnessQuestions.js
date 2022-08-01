import React from "react";
import { useForm } from "react-hook-form";

const obj = [
	{
		question: "Have you had an anxiety attack (suddenly feeling fear or panic)?",
	},
	{
		question: "How often have you been bothered by feeling nervous, anxious or on edge?",
	},
	{
		question: "How often have you been bothered by not being able to stop or control worrying?",
	},
	{
		question: "How often have you been bothered by worrying too much about different things?",
	},
	{
		question: "How often have you been bothered by feeling nervous, anxious or on edge?",
	},
	{
		question: "How often have you been bothered by not being able to stop or control worrying?",
	},
	{
		question: "How often have you been bothered by having trouble relaxing?",
	},
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

function QuestionComponentAnxiousness({ data }) {
	// export const QuestionComponentAnxiousness = ({ data }) => {
	const { register, handleSubmit, resetField } = useForm();
	const onSubmit = async (data) => {
		if (!data) return {};
		resetField("amount");
	};
	return (
		<form id="form">
			<div className="grid gap-4">
				<h3 className="text-md">{data.question ?? ""}</h3>
				<h3>Please enter between 0-3 for how much this applied to you today</h3>
				<div className="input-group">
					<input type="text" {...register("amount")} placeholder="Amount" className="form-inputmt-1 block w-full py-2.5 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm" />
				</div>
				<div className="submit-btn" onSubmit={handleSubmit(onSubmit)}>
					<button className="border py-2 text-white bg-green-500 w-full">Submit</button>
				</div>
			</div>
		</form>
	);
}
