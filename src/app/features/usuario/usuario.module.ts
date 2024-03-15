import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [UsuarioComponent],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}
