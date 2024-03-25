import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroiComponent } from './heroi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroiComponent],
  imports: [BrowserModule, FormsModule, RouterModule, ReactiveFormsModule],
  bootstrap: [HeroiComponent],
  exports: [HeroiComponent],
})
export class HeroiModule {}
