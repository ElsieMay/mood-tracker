import { gql } from "@apollo/client";

export const GET_ME = gql`
	query Me {
		me {
			_id
			username
			moodCount
			email
			savedMoods {
				description
				_id
				moodId
				title
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
				description
				_id
				moodId
				title
			}
		}
	}
`;
