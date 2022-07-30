const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const LowMood = require("./Mood");
const Anxiousness = require("./Mood");

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

		savedMoods: [LowMood, Anxiousness],
	},

	{
		toJSON: {
			virtuals: true,
		},
	}
);

userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

userSchema.virtual("moodCount").get(function () {
	return this.savedMoods.length;
});

const User = model("User", userSchema);

module.exports = User;
