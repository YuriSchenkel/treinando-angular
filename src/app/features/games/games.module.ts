import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GamesComponent } from './games.component';

@NgModule({
  declarations: [GamesComponent],
  imports: [BrowserModule],
  bootstrap: [GamesComponent],
  exports: [GamesComponent],
})
export class GamesModule {}
