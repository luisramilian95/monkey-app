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

const ADD_CREDIT_CARD = gql`
	mutation AddCreditCard(
		$firstName: String
		$lastName: String
		$cardNumber: String
		$expirationDate: String
		$cvv: String
	) {
		addCreditCard(
			firstName: $firstName
			lastName: $lastName
			cardNumber: $cardNumber
			expirationDate: $expirationDate
			cvv: $cvv
		) {
			id
			firstName
			lastName
			cardNumber
			company
			expirationDate
			defaultCard
		}
	}
`;

const GET_CREDIT_CARDS = gql`
	query {
		paymentMethods {
			id
			firstName
			lastName
			cardNumber
			company
			expirationDate
			defaultCard
		}
	}
`;

export { PROFILE_QUERY, UPDATE_PROFILE, ADD_CREDIT_CARD, GET_CREDIT_CARDS };
