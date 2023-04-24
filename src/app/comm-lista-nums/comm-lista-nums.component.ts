import { Component } from '@angular/core';

@Component({
  selector: 'app-comm-lista-nums',
  templateUrl: './comm-lista-nums.component.html',
  styleUrls: ['./comm-lista-nums.component.css']
})
export class CommListaNumsComponent {
  nums: number[] = [];

  addNum(evt: number): void {
    if(!this.nums.includes(evt)) {
      this.nums.push(evt);
    }
  }
}
