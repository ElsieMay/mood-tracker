import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Graph = () => {
	var data = {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 35, 5, 5, 6, 8],
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
				hoverOffset: 4,
				borderRadius: 10,
				borderWidth: 1,
				spacing: 10,
			},
		],
	};
	var options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};
	return (
		<>
			<div className="flex justify-content max-w-xs mx-auto">
				<div className="item">
					<div className="chart relative">
						<Bar data={data} options={options} />
					</div>
					<div className="flex flex-col py-10 gap-4"></div>
				</div>
			</div>
		</>
	);
};

export default Graph;
