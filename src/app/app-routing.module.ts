import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path: 'register', component: RegisterFormComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: '**', redirectTo: 'register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
