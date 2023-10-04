import { gql } from "apollo-angular";

const PROFILE_QUERY = gql`
	query {
		profile {
			id
			username
			firstName
			lastName
			email
			profileImage
			phone
		}
	}
`;

const UPDATE_PROFILE = gql`
	mutation UpdateProfile(
		$firstName: String
		$lastName: String
		$phone: String
		$profileImage: String
	) {
		updateProfile(
			firstName: $firstName
			lastName: $lastName
			phone: $phone
			profileImage: $profileImage
		) {
			id
			username
			firstName
			lastName
			email
			profileImage
			phone
		}
	}
`;

export { PROFILE_QUERY, UPDATE_PROFILE };
