import { Component, EventEmitter, Input, Output } from '@angular/core';
import CalculadoraInterface from 'src/app/interfaces/calculadora.interface';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  @Input() visor: string = '0';
  @Input() historicoCalculadora: CalculadoraInterface[] = [];
  @Input() escolheuHistorico: boolean = false;
  @Output() emissaoNumero: EventEmitter<string> = new EventEmitter<string>();
  @Output() emissaoClear: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emissaoOperacao: EventEmitter<string> = new EventEmitter<string>();
  @Output() emissaoIgual: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emissaoHistorico: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() emissaoFecharHistorico: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onClickNumber(numero: string) {
    this.emissaoNumero.emit(numero);
  }

  onClickClear() {
    this.emissaoClear.emit();
  }

  onClickOperation(operacao: string) {
    this.emissaoOperacao.emit(operacao);
  }

  onClickEqual() {
    this.emissaoIgual.emit();
  }

  onClickHistorico() {
    this.emissaoHistorico.emit();
  }

  onClickFecharHistorico() {
    this.emissaoFecharHistorico.emit();
  }
}
