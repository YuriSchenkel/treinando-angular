import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosComponent } from './usuarios.component';
import { RouterModule } from '@angular/router';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [BrowserModule, RouterModule, UsuarioModule],
  bootstrap: [UsuariosComponent],
  exports: [UsuariosComponent],
})
export class UsuariosModule {}
