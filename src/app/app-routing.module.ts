import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './features/calculadora/calculadora.component';
import { HeroesComponent } from './features/herois/herois.component';
import { UsuariosComponent } from './features/usuarios/usuarios.component';
import { HeroiComponent } from './features/heroi/heroi.component';
import { UsuarioComponent } from './features/usuario/usuario.component';
import { GamesComponent } from './features/games/games.component';
import { TemperaturaComponent } from './features/temperatura/temperatura.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: 'calculator', component: CalculadoraComponent },
  { path: 'edit-hero/:id', component: HeroiComponent },
  { path: 'edit-user/:id', component: UsuarioComponent },
  { path: 'games', component: GamesComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'temperature', component: TemperaturaComponent },
  { path: 'users', component: UsuariosComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
