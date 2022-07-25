const { Schema } = require("mongoose");

const moodSchema = new Schema({
	description: {
		type: String,
		required: true,
	},
	moodId: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});

module.exports = moodSchema;
