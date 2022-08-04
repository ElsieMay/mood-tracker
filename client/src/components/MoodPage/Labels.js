import React from "react";

const obj = [
	{
		type: "Anxiousness",
		color: "#e1b37f",
	},
	{
		type: "Low Mood",
		color: "#d6de88",
	},
];

//Map through labels to return data
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
		</div>
	);
}
