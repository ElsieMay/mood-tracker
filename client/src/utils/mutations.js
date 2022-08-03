import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;
export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			user {
				_id
				username
				email
				moodCount
				savedMoods {
					type
					moodId
					value
				}
			}
			token
		}
	}
`;
export const SAVE_MOOD = gql`
	mutation saveMood($input: saveMoodInput!) {
		saveMood(input: $input) {
			_id
			username
			email
			moodCount
			savedMoods {
				moodId
				value
				type
				date
			}
		}
	}
`;
export const REMOVE_MOOD = gql`
	mutation deleteMood($moodId: ID!) {
		deleteMood(moodId: $moodId) {
			_id
			username
			email
			moodCount
			savedMoods {
				_id
				type
				moodId
				value
				date
			}
		}
	}
`;
