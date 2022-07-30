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
				<div className="grid gap-4">
					<h4>How often have you had little interest or pleasure in doing things?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by trouble falling or staying asleep, or sleeping too much?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by feeling tired or having little energy?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by poor appetite or overeating?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by feeling bad about yourself, or that you are a failure, or have let yourself or your family down?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?</h4>
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
				<div className="grid gap-4">
					<h4>Have you had an anxiety attack (suddenly feeling fear or panic)?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by feeling nervous, anxious or on edge?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by not being able to stop or control worrying?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by worrying too much about different things?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by having trouble relaxing?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by being so restless that it is hard to sit still?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by becoming easily annoyed or irritable?</h4>
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
				<div className="grid gap-4">
					<h4>How often have you been bothered by feeling afraid as if something awful might happen?</h4>
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
