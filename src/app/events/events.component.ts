import { Component } from '@angular/core';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.css']
})
export class EventsComponent {
	btnClicked(): void {
		alert("Me has hecho click!");
	}

	selectChanged(evt: any): void {
		alert(`Valor actual del select: ${evt.target.value}`);
	}
}
