import { gql } from "@apollo/client";

export const GET_ME = gql`
	{
		me {
			_id
			username
			moodCount
			email
			savedMoods {
				savedMoods {
					moodId
					title
					description
				}
			}
		}
	}
`;
