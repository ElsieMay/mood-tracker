import { gql } from "@apollo/client";

//query to get user data, using apollo
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

//query to get mood data, using apollo
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
