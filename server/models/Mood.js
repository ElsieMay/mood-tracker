const { Schema, model } = require("mongoose");

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

const lowSchema = new Schema({
	description: {
		type: String,
	},
	moodId: {
		type: String,
	},
	type: { type: String, default: "low" },
	color: { type: String, default: "#d6de88" },
	date: { type: Date, default: Date.now },
});

const anxiousnessSchema = new Schema({
	description: {
		type: String,
	},
	moodId: {
		type: String,
	},
	type: { type: String, default: "anxiousness" },
	color: { type: String, default: "#e1b37f" },
	date: { type: Date, default: Date.now },
});

const LowMood = model("LowMood", lowSchema);
const Anxiousness = model("Anxiousness", anxiousnessSchema);

module.exports = { anxiousnessSchema, lowSchema };
