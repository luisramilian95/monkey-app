export interface Category {
	id?: string;
	name: string;
	subcategories: string[];
}

export interface Ticket {
	id?: string;
	event: Event;
	zone: EventZone;
	seat: EventSeat;
	status: TicketStatus;
	cost: number;
	orderNumber: number;
}

export interface Event {
	id?: string;
	name: string;
	eventType?: string;
	startDate: Date;
	endDate: Date;
	description?: string;
	eventImageUrl?: string;
	venue: EventVenue;
}

export interface EventVenue {
	id?: string;
	name: string;
}

export interface EventZone {
	id?: string;
	name: string;
}

export interface EventSeat {
	id?: string;
	name: string;
	accessibility: boolean;
}

export enum TicketStatus {
	NEW,
	OPEN,
	RESOLVED,
	CANCELLED,
}
