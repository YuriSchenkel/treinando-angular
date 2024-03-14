import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() chooseBtn: string[] = [];
  @Output() emitClick: EventEmitter<boolean[]> = new EventEmitter<boolean[]>();
  class: string = '';
  onClick(btn: string) {
    let answer: boolean[];
    switch (btn) {
      case 'Calculator':
        answer = [true, false, false, false];
        this.emitClick.emit(answer);
        break;
      case 'History of Calculator':
        answer = [false, true, false, false];
        this.emitClick.emit(answer);
        break;
      case 'Heroes':
        answer = [false, false, true, false];
        this.emitClick.emit(answer);
        break;
      case 'Users':
        answer = [false, false, false, true];
        this.emitClick.emit(answer);
        break;
    }
  }
}
