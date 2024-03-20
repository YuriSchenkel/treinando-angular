import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadoraComponent } from './calculadora.component';
import { FormsModule } from '@angular/forms';
import { HistoricoModule } from '../historico/historico.module';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [BrowserModule, FormsModule, HistoricoModule],
  bootstrap: [CalculadoraComponent],
  exports: [CalculadoraComponent],
})
export class CalculadoraModule {}
