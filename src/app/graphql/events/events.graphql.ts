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

export { ALL_EVENTS_QUERY };
