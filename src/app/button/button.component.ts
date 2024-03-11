import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() btnEscolha: string[] = [];
  @Output() emissaoClick: EventEmitter<boolean[]> = new EventEmitter<
    boolean[]
  >();
  class: string = '';
  onClick(btn: string) {
    let resposta: boolean[];
    switch (btn) {
      case 'Heróis':
        resposta = [true, false];
        this.emissaoClick.emit(resposta);
        break;
      case 'Usuários':
        resposta = [false, true];
        this.emissaoClick.emit(resposta);
        break;
    }
  }
}
