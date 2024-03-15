import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [BrowserModule],
  bootstrap: [UsuariosComponent],
  exports: [UsuariosComponent],
})
export class UsuariosModule {}
