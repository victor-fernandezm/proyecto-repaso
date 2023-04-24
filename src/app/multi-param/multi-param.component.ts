import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-multi-param',
	templateUrl: './multi-param.component.html',
	styleUrls: ['./multi-param.component.css']
})
export class MultiParamComponent {
	idParam: number;
	actionParam: number;
	constructor(private route: ActivatedRoute) {
		this.idParam = route.snapshot.params['id'];
		this.actionParam = route.snapshot.params['action'];
	}
}
