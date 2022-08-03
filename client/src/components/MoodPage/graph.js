import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Labels } from "./Labels";
import styles from "./styles.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Graph = ({ savedMoods }) => {
	console.log("this is saved moods from graph.js", savedMoods);
	const anxiousMoods = savedMoods.filter((x) => x.type === "anxious");
	const lowMoods = savedMoods.filter((x) => x.type === "low");

	const anxiousTotal = anxiousMoods.map((x) => x.value).reduce((a, b) => a + b, 0);
	const lowTotal = lowMoods.map((x) => x.value).reduce((a, b) => a + b, 0);
	console.log({
		anxiousMoods,
		anxiousTotal,
		lowMoods,
		lowTotal,
	});
	var data = {
		labels: ["Low Mood", "Anxiousness"],
		datasets: [
			{
				label: "# of Votes",
				data: [lowTotal, anxiousTotal], //pass prop or usecontext from question. Spreading prop passed moodvalue
				options: { tension: 0.0, bezierCurve: false },
				borderWidth: 1,
				tension: 0.25,
				backgroundColor: ["rgba(204, 204, 153, 0.2)", "rgba(204, 153, 102, 0.2)"],
				borderColor: ["rgba(177, 185, 91, 1)", "rgba(194, 154, 108, 1)"],
				hoverOffset: 4,
				borderRadius: 10,
				borderWidth: 1,
				spacing: 10,
			},
		],
		options: {
			tension: 1,
			scaleBeginAtZero: true,
			scaleStartValue: 0,
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	};
	return (
		<>
			<div className={styles.graph}>
				<div className={styles.graph_properties}>
					<div className="chart relative">
						<Bar data={data} />
					</div>
					<div className="flex flex-col py-10 gap-4">
						<Labels></Labels>
					</div>
				</div>
			</div>
		</>
	);
};

export default Graph;
