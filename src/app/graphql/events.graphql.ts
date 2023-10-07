import { gql } from "apollo-angular";

const ALL_EVENTS_QUERY = gql`
	query {
		allEvents {
			id
			name
			description
			startDate
			endDate
			eventImageUrl
			venue {
				venueId
				name
			}
		}
	}
`;

const ALL_CATEGORIES = gql`
	query {
		categories {
			id
			name
			subcategories
		}
	}
`;

const EVENTS_BY_NAME = gql`
	query EventsByCategory($name: String!) {
		eventsByCategoryName(name: $name) {
			id
			name
			description
			startDate
			endDate
			eventImageUrl
			venue {
				venueId
				name
			}
		}
	}
`;

export { ALL_EVENTS_QUERY, ALL_CATEGORIES, EVENTS_BY_NAME };
