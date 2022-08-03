import { gql } from "@apollo/client";

export const GET_ME = gql`
	query Me {
		me {
			_id
			username
			moodCount
			email
			savedMoods {
				type
				moodId
				value
				_id
			}
		}
	}
`;

export const GET_MY_MOOD = gql`
	query MyMood {
		me {
			_id
			username
			moodCount
			email
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
