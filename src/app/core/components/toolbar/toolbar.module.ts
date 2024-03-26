import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TemperaturaModule } from 'src/app/features/temperatura/temperatura.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    TemperaturaModule,
  ],
  bootstrap: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
