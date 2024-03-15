import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroiComponent } from './heroi.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroiComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [HeroiComponent],
  exports: [HeroiComponent],
})
export class HeroiModule {}
