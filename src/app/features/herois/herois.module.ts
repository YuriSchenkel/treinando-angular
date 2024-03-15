import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent } from './herois.component';

@NgModule({
  declarations: [HeroesComponent],
  imports: [BrowserModule],
  bootstrap: [HeroesComponent],
  exports: [HeroesComponent],
})
export class HeroisModule {}
