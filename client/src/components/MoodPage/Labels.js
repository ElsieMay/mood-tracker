import React from "react";
import { default as api } from "../../store/apiSlice";

const obj = [
	{
		type: "Anxiousness",
		color: "#e1b37f",
		percent: 30,
	},
	{
		type: "Low Mood",
		color: "#d6de88",
		percent: 80,
	},
];

export const Labels = () => {
	console.log(api.useSaveMoodQuery());

	return (
		<>
			{obj.map((v, i) => (
				<LabelComponent key={i} data={v}></LabelComponent>
			))}
		</>
	);
};

function LabelComponent({ data }) {
	if (!data) return <></>;
	return (
		<div className="labels flex justify-between">
			<div className="flex gap-2">
				<div className="w-2 h-2 rounded py-3" style={{ background: data.color ?? "#d6de88" }}></div>
				<h3 className="text-md">{data.type ?? ""}</h3>
			</div>
			<h3 className="font-bold">{data.percent ?? 0}%</h3>
		</div>
	);
}
