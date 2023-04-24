import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-single-param',
	templateUrl: './single-param.component.html',
	styleUrls: ['./single-param.component.css']
})
export class SingleParamComponent {
	idParam: number;
	constructor(private route: ActivatedRoute) {
		this.idParam = route.snapshot.params['id'];
	}
}
