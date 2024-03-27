import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CpfPipe } from 'src/app/shared/pipes/pipe/cpf/cpf.pipe';

@NgModule({
  declarations: [CpfPipe],
  imports: [BrowserModule, RouterModule],
  bootstrap: [CpfPipe],
  exports: [CpfPipe],
})
export class CpfPipeModule {}
