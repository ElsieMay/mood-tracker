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

	const anxiousTotal = anxiousMoods.map((x) => x.value);
	const lowTotal = lowMoods.map((x) => x.value);

	const Date = savedMoods.map((x) => x.date);

	// console.log("DATE MAPPPP", dateMap);

	const data = {
		labels: [Date[0], Date[1], Date[2], Date[3], Date[4], Date[5], Date[6], Date[7], Date[8], Date[9], Date[10], Date[11], Date[12], Date[13], Date[14], Date[15], Date[16], Date[17]],
		datasets: [
			{
				label: "Low Mood",
				data: [lowTotal[0], lowTotal[1], lowTotal[2], lowTotal[3], lowTotal[4], lowTotal[5], lowTotal[6], lowTotal[7], lowTotal[8], lowTotal[9], lowTotal[10], lowTotal[11], lowTotal[12], lowTotal[13], lowTotal[14], lowTotal[15], lowTotal[16], lowTotal[17], lowTotal[18], lowTotal[19]],
				fill: true,
				borderColor: "#e1b37f",
			},
			{
				label: "Anxiousness",
				data: [anxiousTotal[0], anxiousTotal[1], anxiousTotal[2], anxiousTotal[3], anxiousTotal[4], anxiousTotal[5], anxiousTotal[6], anxiousTotal[7], anxiousTotal[8], anxiousTotal[9], anxiousTotal[10], anxiousTotal[11], anxiousTotal[12], anxiousTotal[13], anxiousTotal[14], anxiousTotal[15], anxiousTotal[16], anxiousTotal[17], anxiousTotal[18], anxiousTotal[19]],
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
