import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  myNumber: number = 0;

  tradeNumber(newNumber: number) {
    this.myNumber = newNumber;
  }
}
