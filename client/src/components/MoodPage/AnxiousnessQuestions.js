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
		question: "How often have you been bothered by worrying too much about different things?",
	},
	{
		question: "How often have you been bothered by having trouble relaxing?",
	},
];

export const AnxiousnessForm = () => {
	const { register, handleSubmit } = useForm();
	return (
		<>
			{obj.map((v, i) => (
				<QuestionComponent key={i} data={v}></QuestionComponent>
			))}
		</>
	);
};

function QuestionComponent({ data }) {
	if (!data) return <></>;
	return (
		<div className="form max-w-sm mx-auto w-96">
			<h1 className="font-bold pb-4 text-xl">Question 1</h1>
			<form id="form" onSubmit={handleSubmit(onSubmit)}>
				<div className="grid gap-4">
					<h3 className="text-md">{data.question ?? ""}</h3>
					{/* <div className="form-input mt-1 block w-full py-2.5 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm" {...register("amount")}>
						<option value="Never">Never</option>
						<option value="Sometimes">Sometimes</option>
						<option value="Frequently">Frequently</option>
						<option value="Always">Always</option>
					</select> */}
					<h3>Please enter between 0-3 for how much this applied to you today</h3>
					<div className="input-group">
						<input type="text" {...register("amount")} placeholder="Amount" className="form-inputmt-1 block w-full py-2.5 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm" />
					</div>
					<div className="submit-btn">
						<button className="border py-2 text-white bg-green-500 w-full">Submit</button>
					</div>
				</div>
			</form>
		</div>
	);
}
