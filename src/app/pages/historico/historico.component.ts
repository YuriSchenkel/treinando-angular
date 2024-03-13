import { Component, EventEmitter, Input, Output } from '@angular/core';
import CalculadoraInterface from 'src/app/interfaces/calculadora.interface';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent {
  @Input() historicoCalculadora: CalculadoraInterface[] = [];
  @Output() emissaoFecharHistorico: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onEmissaoFecharHistorico() {
    this.emissaoFecharHistorico.emit();
  }
}
