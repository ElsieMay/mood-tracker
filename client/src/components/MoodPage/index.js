import React from "react";
import Graph from "./graph";
import MoodForm from "./form";
import { useQuery } from "@apollo/client";
import { GET_MY_MOOD } from "../../utils/queries";
import TopButton from "./TopButton";

const MoodPage = () => {
	//Query to get moods
	const { loading, data } = useQuery(GET_MY_MOOD);
	//Returns both graph and mood forms
	return (
		<div>
			<div className="App">
				<div className="container mx-auto text-center drop-shadow-lg text-gray-800">
					<h1 className="text-2xl py-8 mb-10 text-green rounded">Debrief on your mood today</h1>
					<div className="grid md:grid-cols-2 gap-4">
						<TopButton />
						{!loading && <Graph savedMoods={data.me.savedMoods}></Graph>}
						<MoodForm></MoodForm>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoodPage;
