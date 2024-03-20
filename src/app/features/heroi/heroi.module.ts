import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroiComponent } from './heroi.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroiComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  bootstrap: [HeroiComponent],
  exports: [HeroiComponent],
})
export class HeroiModule {}
