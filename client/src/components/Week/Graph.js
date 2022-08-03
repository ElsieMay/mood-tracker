import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Labels } from "./Labels";
import styles from "./styles.module.css";
import { graphQLResultHasError } from "@apollo/client/utilities";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const WeekGraph = ({ savedMoods }) => {
	console.log("this is saved moods from graph.js", savedMoods);
	const anxiousMoods = savedMoods.filter((x) => x.type === "anxious");
	const lowMoods = savedMoods.filter((x) => x.type === "low");

	const anxiousTotal = anxiousMoods.map((x) => x.date).reduce((a, b) => a + b, 0);
	const lowTotal = lowMoods.map((x) => x.date).reduce((a, b) => a + b, 0);

	const data = {
		labels: [lowTotal, anxiousTotal],
		datasets: [
			{
				label: "Low Mood",
				data: [33, 53, 35, 41, 53, 85, 41],
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

	return (
		<>
			<div className="week-graph">
				<Line data={data} />
				<div className={styles.labels}>
					<Labels />
				</div>
			</div>
		</>
	);
};

export default WeekGraph;
