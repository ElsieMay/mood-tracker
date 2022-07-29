import React from "react";
import { useForm } from "react-hook-form";

export default function MoodForm() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="form max-w-sm mx-auto w-96">
			<h1 className="font-bold pb-4 text-xl">Question 1</h1>
			<form id="form" onSubmit={handleSubmit(onSubmit)}>
				<div className="grid gap-4">
					<h4>How often have you been bothered by feeling down, depressed or hopeless?</h4>
					<select className="form-input mt-1 block w-full py-2.5 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm" {...register("selection")}>
						<option value="Never">Never</option>
						<option value="Sometimes">Sometimes</option>
						<option value="Frequently">Frequently</option>
						<option value="Always">Always</option>
					</select>
					<div className="submit-btn">
						<button className="border py-2 text-white bg-green-500 w-full">Submit</button>
					</div>
				</div>
			</form>
		</div>
	);
}
