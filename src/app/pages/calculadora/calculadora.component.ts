import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  @Input() visor: string = '0';
  @Output() emissaoNumero: EventEmitter<string> = new EventEmitter<string>();
  @Output() emissaoClear: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emissaoOperacao: EventEmitter<string> = new EventEmitter<string>();

  onClickNumber(numero: string) {
    this.emissaoNumero.emit(numero);
  }

  onClickClear() {
    this.emissaoClear.emit();
  }

  onClickOperation(operacao: string) {
    this.emissaoOperacao.emit(operacao);
  }
}
