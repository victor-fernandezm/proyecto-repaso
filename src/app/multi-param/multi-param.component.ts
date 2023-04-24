import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-multi-param',
	templateUrl: './multi-param.component.html',
	styleUrls: ['./multi-param.component.css']
})
export class MultiParamComponent {
	idParam: number;
	actionParam: string;
	constructor(private route: ActivatedRoute) {
		this.idParam = route.snapshot.queryParams['id'];
		this.actionParam = route.snapshot.queryParams['action'];
	}
}
