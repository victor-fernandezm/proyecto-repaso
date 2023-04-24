import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comm-entrada-num',
  templateUrl: './comm-entrada-num.component.html',
  styleUrls: ['./comm-entrada-num.component.css']
})
export class CommEntradaNumComponent {
  @Output() numEvent: EventEmitter<number> = new EventEmitter<number>();
  num: number = 0;

  sendAddEvent(): void {
    this.numEvent.emit(this.num);
  }
}
