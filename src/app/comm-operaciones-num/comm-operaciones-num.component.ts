import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comm-operaciones-num',
  templateUrl: './comm-operaciones-num.component.html',
  styleUrls: ['./comm-operaciones-num.component.css']
})
export class CommOperacionesNumComponent {
  @Input() num: number = 0;

  show(base: number = 10): void {
    if(base == 10)
      alert(this.num);
    else
      alert(this.num.toString(base));
  }

  convert(base: number = 10): string {
    if(base == 10)
      return this.num.toString();
    else
      return this.num.toString(base)
  }
}
