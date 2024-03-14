import { Component, EventEmitter, Input, Output } from '@angular/core';
import CalculadoraInterface from 'src/app/interfaces/calculadora.interface';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  @Input() display: string = '0';
  @Output() emitNumber: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitClear: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emitOperation: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitEquals: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClickNumber(numero: string) {
    this.emitNumber.emit(numero);
  }

  onClickClear() {
    this.emitClear.emit();
  }

  onClickOperation(operacao: string) {
    this.emitOperation.emit(operacao);
  }

  onClickEqual() {
    this.emitEquals.emit();
  }
}
