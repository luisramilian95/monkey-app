export interface Ticket {
	id?: string;
	event: Event;
	venue: EventVenue;
	zone: EventZone;
	seat: EventSeat;
	status: TicketStatus;
	cost: number;
	orderNumber: number;
}

export interface Event {
	id?: string;
	name: string;
	eventType: string;
	startTime: Date;
	endTime: Date;
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
