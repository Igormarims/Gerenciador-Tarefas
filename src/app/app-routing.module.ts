import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './service/auth/auth.guard';

const routes: Routes = [
  {path:'', component: PainelComponent, pathMatch: 'full',canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
