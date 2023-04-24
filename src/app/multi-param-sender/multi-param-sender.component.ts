import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-param-sender',
  templateUrl: './multi-param-sender.component.html',
  styleUrls: ['./multi-param-sender.component.css']
})
export class MultiParamSenderComponent {
	idParam: number = 5;
	actionParam: string = "delete";
}
