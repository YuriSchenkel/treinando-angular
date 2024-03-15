import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './features/calculadora/calculadora.component';
import { HistoricoComponent } from './features/historico/historico.component';
import { HeroesComponent } from './features/herois/herois.component';
import { UsuarioComponent } from './features/usuario/usuario.component';
import { UsuariosComponent } from './features/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'calculator', component: CalculadoraComponent },
  { path: 'history-calculator', component: HistoricoComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'users', component: UsuariosComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
