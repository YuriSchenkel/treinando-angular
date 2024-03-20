import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent } from './herois.component';
import { HeroiModule } from '../heroi/heroi.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroesComponent],
  imports: [BrowserModule, HeroiModule, RouterModule],
  bootstrap: [HeroesComponent],
  exports: [HeroesComponent],
})
export class HeroisModule {}
