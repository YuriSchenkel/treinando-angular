import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FooterComponent],
  imports: [BrowserModule, MatCardModule],
  bootstrap: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
