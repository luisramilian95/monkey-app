import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class DatabaseService {
	constructor() {}

	public getTicketSecret(ticketId: string | undefined) {
		return new Promise((resolve) => {
			resolve({
				ticketId: "",
				ticket: {},
				secret: "JBSXY5FPEJPK5PXP",
			});
		});
	}
}
