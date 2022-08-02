import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Labels } from "./Labels";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [
		{
			label: "Low Mood",
			data: [33, 53, 85, 41, 53, 85, 41],
			fill: true,
			borderColor: "rgba(177, 185, 91, 1)",
		},
		{
			label: "Anxiousness",
			data: [33, 25, 35, 51, 13, 35, 40],
			fill: false,
			borderColor: "#e1b37f",
		},
	],
};

export default function App() {
	return (
		<div className="App">
			<Line data={data} />
			<Labels />
		</div>
	);
}
