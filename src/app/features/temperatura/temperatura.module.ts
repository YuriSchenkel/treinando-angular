import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemperaturaComponent } from './temperatura.component';

@NgModule({
  declarations: [TemperaturaComponent],
  imports: [BrowserModule],
  bootstrap: [TemperaturaComponent],
  exports: [TemperaturaComponent],
})
export class TemperaturaModule {}
