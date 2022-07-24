const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from mood.js
const moodSchema = require("./Mood");

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: [true, "Please add a name"],
			unique: true,
		},
		email: {
			type: String,
			required: [true, "Please add an email"],
			unique: true,
			match: [/.+@.+\..+/, "Must use a valid email address"],
		},
		password: {
			type: String,
			required: [true, "Please add a password"],
		},
		// set savedMoods to be an array of data that adheres to the moodSchema
		savedMoods: [moodSchema],
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
		},
	}
);

// hash user password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `moodCount` with the number of saved moods we have
userSchema.virtual("moodCount").get(function () {
	return this.savedMoods.length;
});

const User = model("User", userSchema);

module.exports = User;