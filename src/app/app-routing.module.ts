import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'currency', component: CurrencyComponent },
  {
    path: 'currency',
    loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
