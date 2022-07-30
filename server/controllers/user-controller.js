const { User } = require("../models");
const model = require("../models/Mood");
const { signToken } = require("../utils/auth");

module.exports = {
	async getSingleUser({ user = null, params }, res) {
		const foundUser = await User.findOne({
			$or: [{ _id: user ? user._id : params.id }, { username: params.username }],
		});

		if (!foundUser) {
			return res.status(400).json({ message: "Cannot find a user with this id!" });
		}

		res.json(foundUser);
	},

	async getLowMood({ user, body }, res) {
		let data = await model.lowSchema.find({});

		let filter = await data.map((v) => Object.assign({}, { type: v.type, color: v.color }));
		res.json(filter);
	},

	async createLowMood({ body }, res) {
		const Create = new model.lowSchema({
			type: "low",
			color: "#d6de88",
		});

		await Create.save(function (err) {
			if (!err) return res.json(Create);
			return res.status(400).json({ message: `Error while creating low mood ${err}` });
		});
	},

	async getAnxiousnessMood({ user, body }, res) {
		let data = await model.lowSchema.find({});

		let filter = await data.map((v) => Object.assign({}, { type: v.type, color: v.color }));
		res.json(filter);
	},

	async createUser({ body }, res) {
		const user = await User.create(body);

		if (!user) {
			// return res.status(400).json({ message: "Something is wrong!" });
			res.json({ test: "You see me" });
		}
		const token = signToken(user);
		res.json({ token, user });
	},

	async login({ body }, res) {
		const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
		if (!user) {
			return res.status(400).json({ message: "Can't find this user" });
		}

		const correctPw = await user.isCorrectPassword(body.password);

		if (!correctPw) {
			return res.status(400).json({ message: "Wrong password!" });
		}
		const token = signToken(user);
		res.json({ token, user });
	},

	async saveMood({ user, body }, res) {
		console.log(user);
		try {
			const updatedUser = await User.findOneAndUpdate({ _id: user._id }, { $addToSet: { savedMoods: body } }, { new: true, runValidators: true });
			return res.json(updatedUser);
		} catch (err) {
			console.log(err);
			return res.status(400).json(err);
		}
	},

	async deleteMood({ user, params }, res) {
		const updatedUser = await User.findOneAndUpdate({ _id: user._id }, { $pull: { savedMoods: { moodId: params.moodId } } }, { new: true });
		if (!updatedUser) {
			return res.status(404).json({ message: "Couldn't find user with this id!" });
		}
		return res.json(updatedUser);
	},
};

module.exports = {
	getLowMood,
};
