import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() btnEscolha: string[] = [];
  @Output() emissaoClick: EventEmitter<boolean[]> = new EventEmitter<
    boolean[]
  >();
  class: string = '';
  onClick(btn: string) {
    let resposta: boolean[];
    switch (btn) {
      case 'Calculadora':
        resposta = [true, false, false];
        this.emissaoClick.emit(resposta);
        break;
      case 'Heróis':
        resposta = [false, true, false];
        this.emissaoClick.emit(resposta);
        break;
      case 'Usuários':
        resposta = [false, false, true];
        this.emissaoClick.emit(resposta);
        break;
    }
  }
}
