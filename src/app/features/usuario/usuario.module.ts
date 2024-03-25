import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioComponent } from './usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
  providers: [],
  bootstrap: [UsuarioComponent],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}
