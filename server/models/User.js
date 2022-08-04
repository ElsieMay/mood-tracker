const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Mood.js
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

	{
		toJSON: {
			virtuals: true,
		},
	}
);

// hashes the user password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

//Compares and validates password when logging in
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

//When a user is queried, we also get the moodCount field
userSchema.virtual("moodCount").get(function () {
	return this.savedMoods.length;
});

const User = model("User", userSchema);

module.exports = User;
