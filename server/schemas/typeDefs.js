const { gql } = require("apollo-server-express");

//Type defs for users and mood inputs
const typeDefs = gql`
	type Mood {
		_id: ID
		type: String
		moodId: String
		value: Int
		date: String
	}
	type User {
		_id: ID!
		username: String
		moodCount: Int
		email: String
		savedMoods: [Mood]
	}
	input saveMoodInput {
		type: String
		moodId: String
		value: Int
		date: String
	}
	type Query {
		me: User
		mymood: Mood
	}
	type Auth {
		token: ID
		user: User
	}
	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		saveMood(input: saveMoodInput): User
		deleteMood(moodId: ID!): User
	}
`;

module.exports = typeDefs;
