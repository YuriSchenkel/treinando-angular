import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [UsuarioComponent],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}
