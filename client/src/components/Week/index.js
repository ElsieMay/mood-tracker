import React from "react";
import Graph from "./Graph";
import { useQuery } from "@apollo/client";
import { GET_MY_MOOD } from "../../utils/queries";

const WeekPage = () => {
	//Mutation to retrieve moods
	const { loading, data } = useQuery(GET_MY_MOOD);

	return (
		<div>
			<div className="App">
				<div className="container mx-auto text-center drop-shadow-lg text-gray-800">
					<h1 className="text-2xl py-8 mb-10 text-green rounded">Your week in review</h1>
					<div>{!loading && <Graph savedMoods={data.me.savedMoods}></Graph>}</div>
				</div>
			</div>
		</div>
	);
};

export default WeekPage;
