import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AboutComponent,
    InfoComponent,
    ClientsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ]
})
export class CurrencyModule { }
