import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodyComponent } from './body.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [BodyComponent],
  imports: [BrowserModule, RouterOutlet],
  bootstrap: [BodyComponent],
  exports: [BodyComponent],
})
export class BodyModule {}
