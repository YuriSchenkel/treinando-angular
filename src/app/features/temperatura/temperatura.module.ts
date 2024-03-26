import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemperaturaComponent } from './temperatura.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [TemperaturaComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [TemperaturaComponent],
  exports: [TemperaturaComponent],
})
export class TemperaturaModule {}
