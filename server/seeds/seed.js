const db = require("../config/connection");
const { Mood } = require("../models");

const moodData = require("./moodData.json");

db.once("open", async () => {
	await Mood.deleteMany({});

	const moods = await Mood.insertMany(moodData);

	console.log("moods seeded");
	process.exit(0);
});
