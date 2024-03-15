import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HistoricoComponent } from './historico.component';

@NgModule({
  declarations: [HistoricoComponent],
  imports: [BrowserModule],
  bootstrap: [HistoricoComponent],
  exports: [HistoricoComponent],
})
export class HistoricoModule {}
