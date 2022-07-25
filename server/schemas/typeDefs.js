const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Mood {
		_id: ID
		description: String
		moodId: String
		title: String
	}
	type User {
		_id: ID!
		username: String
		moodCount: Int
		email: String
		savedMoods: [Mood]
	}
	input savedMood {
		moodId: String
		description: String
		title: String
	}
	type Query {
		me: User
	}
	type Auth {
		token: ID
		user: User
	}
	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		saveMood(input: savedMood!): User
		deleteMood(moodId: ID!): User
	}
`;

module.exports = typeDefs;
