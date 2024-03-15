import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadoraComponent } from './calculadora.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [CalculadoraComponent],
  exports: [CalculadoraComponent],
})
export class CalculadoraModule {}
