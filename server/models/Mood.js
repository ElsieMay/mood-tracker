const { Schema, default: mongoose } = require("mongoose");

// const moodSchema = new Schema({
// 	description: {
// 		type: String,
// 	},
// 	moodId: {
// 		type: String,
// 	},
// 	title: {
// 		type: String,
// 	},
// });

// module.exports = moodSchema;

const low_mood = new Schema({
	type: { type: String },
	color: { type: String, default: "#d6de88" },
	date: { type: Date, default: Date.now },
});

const anxiousness = new Schema({
	type: { type: String },
	color: { type: String, default: "#d6de88" },
	date: { type: Date, default: Date.now },
});

const LowMood = mongoose.model("low_mood", low_mood);
const Anxiousness = mongoose.model("anxiousness", anxiousness);
