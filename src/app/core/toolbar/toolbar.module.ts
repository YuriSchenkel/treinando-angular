import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [BrowserModule, MatToolbarModule, MatButtonModule],
  bootstrap: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
