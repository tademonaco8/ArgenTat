import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PpalComponent } from './components/ppal/ppal.component';
import { LoginComponent } from './components/login/login.component';
import { InspiracionComponent } from './components/inspo/inspo.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { AuthGuard } from './auth.guard';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: '', component: PpalComponent},
  {path: 'inspo', component: InspiracionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'turnos', component: TurnosComponent, canActivate: [AuthGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
