import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'info', component:InfoComponent},
  {path:'clients', component:ClientsComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
