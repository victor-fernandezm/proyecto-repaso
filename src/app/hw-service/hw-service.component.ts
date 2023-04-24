import { Component } from '@angular/core';
import { HelloWorldService } from '../hello-world.service';

@Component({
	selector: 'app-hw-service',
	templateUrl: './hw-service.component.html',
	styleUrls: ['./hw-service.component.css']
})
export class HwServiceComponent {
	constructor(private hwService: HelloWorldService) {
		console.log(hwService.helloWorld());
	}
}
