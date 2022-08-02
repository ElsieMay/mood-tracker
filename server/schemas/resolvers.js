const { User, Mood } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select("-__v -password");
				return userData;
			}
			throw new AuthenticationError("You are not logged in");
		},
		mymood: async (parent, args, context) => {
			if (context.user) {
				const userData = await Mood.findOne({ _id: context.mood._id });
				return userData;
			}
			throw new AuthenticationError("You are not logged in");
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			console.log(args);
			const user = await User.create(args);
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError("Can't find this user");
			}
			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new AuthenticationError("Wrong password!");
			}
			const token = signToken(user);
			return { token, user };
		},
		saveMood: async (parent, { input }, context) => {
			console.log(input);
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { savedMoods: input } }, { new: true, runValidators: true });
				return updatedUser;
			}
			throw new AuthenticationError("You need to be logged in");
		},
		deleteMood: async (parent, { moodId }, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { savedMoods: { moodId: moodId } } }, { new: true });
				return updatedUser;
			}
			throw new AuthenticationError("You need to be logged in");
		},
	},
};

module.exports = resolvers;
