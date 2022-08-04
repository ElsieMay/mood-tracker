import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Labels } from "./Labels";
import styles from "./styles.module.css";
import { graphQLResultHasError } from "@apollo/client/utilities";
import { groupBy, meanBy } from "lodash";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const WeekGraph = ({ savedMoods }) => {
	//Filter through saved mood data to retrieve anxious and low types
	const anxiousMoods = savedMoods.filter((x) => x.type === "anxious");
	const lowMoods = savedMoods.filter((x) => x.type === "low");

	//Lodash groups data by mood
	var lowMoodsByDate = groupBy(lowMoods, (mood) => mood.date);
	var anxiousMoodsByDate = groupBy(anxiousMoods, (mood) => mood.date);
	//Finds average value per day
	const lowMoodAvgByDate = Object.entries(lowMoodsByDate).map(([date, values]) => {
		const avgValue = meanBy(values, "value");
		return { date, avgValue };
	});
	//Finds average value per day
	const anxiousMoodAvgByDate = Object.entries(anxiousMoodsByDate).map(([date, values]) => {
		const avgValue = meanBy(values, "value");
		return { date, avgValue };
	});

	//Map through data for dates and corresponding values
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
	//Map through data for dates and corresponding values
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
			<div className={styles.week_graph}>
				<Line data={lowData} className={styles.low_graph} />
				<Line data={anxiousData} className={styles.anxious_graph} />
				<div className={styles.labels}>
					<Labels />
				</div>
			</div>
		</>
	);
};
export default WeekGraph;
