import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Labels } from "./Labels";
import styles from "./styles.module.css";
import { graphQLResultHasError } from "@apollo/client/utilities";
import { groupBy, meanBy } from "lodash";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const WeekGraph = ({ savedMoods }) => {
	console.log("this is saved moods from graph.js", savedMoods);
	const anxiousMoods = savedMoods.filter((x) => x.type === "anxious");
	const lowMoods = savedMoods.filter((x) => x.type === "low");
	console.log("ANXIOUS MOOD DATA", anxiousMoods);
	// const anxiousTotal = anxiousMoods.map((x) => x.value);
	// const lowTotal = lowMoods.map((x) => x.value);
	// const Date = savedMoods.map((x) => x.date);
	var lowMoodsByDate = groupBy(lowMoods, (mood) => mood.date);
	var anxiousMoodsByDate = groupBy(anxiousMoods, (mood) => mood.date);
	const lowMoodAvgByDate = Object.entries(lowMoodsByDate).map(([date, values]) => {
		const avgValue = meanBy(values, "value");
		return { date, avgValue };
	});
	const anxiousMoodAvgByDate = Object.entries(anxiousMoodsByDate).map(([date, values]) => {
		const avgValue = meanBy(values, "value");
		return { date, avgValue };
	});

	console.log("LOW MOOD BY DATE", lowMoodAvgByDate);
	console.log(anxiousMoodsByDate);
	// console.log({ anxiousTotal, Date });
	// console.log("DATE MAPPPP", dateMap);
	const lowData = {
		labels: lowMoodAvgByDate.map((x) => x.date),
		datasets: [
			{
				label: "Low Mood",
				data: lowMoodAvgByDate.map((x) => x.avgValue),
				fill: true,
				borderColor: "#E1B37F",
			},
		],
	};
	const anxiousData = {
		labels: anxiousMoodAvgByDate.map((x) => x.date),
		datasets: [
			{
				label: "Low Mood",
				data: anxiousMoodAvgByDate.map((x) => x.avgValue),
				fill: true,
				borderColor: "#d6de88",
			},
		],
	};
	return (
		<>
			<div className="week-graph">
				<Line data={lowData} />
				<Line data={anxiousData} />
				<div className={styles.labels}>
					<Labels />
				</div>
			</div>
		</>
	);
};
export default WeekGraph;
