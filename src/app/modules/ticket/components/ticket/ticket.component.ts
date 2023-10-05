import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-ticket-component",
	templateUrl: "./ticket.component.html",
	styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent implements OnInit {
	public progress = 0;

	constructor() {
		setInterval(() => {
			this.progress += 0.01;

			// Reset the progress bar when it reaches 100%
			// to continuously show the demo
			if (this.progress > 1) {
				setTimeout(() => {
					this.progress = 0;
				}, 1000);
			}
		}, 50);
	}

	ngOnInit() {}
}