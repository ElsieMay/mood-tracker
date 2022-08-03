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

	const anxiousTotal = anxiousMoods.map((x) => x.value).reduce((a, b) => a + b, 0);
	const lowTotal = lowMoods.map((x) => x.value).reduce((a, b) => a + b, 0);

	const dateMap = anxiousMoods.map((x) => x.date);
	var date = dateMap[0];

	console.log({
		anxiousMoods,
		anxiousTotal,
		lowMoods,
		lowTotal,
	});

	const data = {
		labels: [date],
		datasets: [
			{
				label: "Low Mood",
				data: [lowTotal],
				fill: true,
				borderColor: "#e1b37f",
			},
			{
				label: "Anxiousness",
				data: [anxiousTotal],
				fill: false,
				borderColor: "rgba(177, 185, 91, 1)",
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
