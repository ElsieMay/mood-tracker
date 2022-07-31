import React from "react";
import Graph from "./graph";
import MoodForm from "./form";

const MoodPage = () => {
	return (
		<div>
			<div className="App">
				<div className="container mx-auto text-center drop-shadow-lg text-gray-800">
					<h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Debrief on your mood today</h1>
					<div className="grid md:grid-cols-2 gap-4">
						<Graph></Graph>
						<MoodForm></MoodForm>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoodPage;
