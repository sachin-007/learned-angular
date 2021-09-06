import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminlmRoutingModule } from './adminlm-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

console.warn("admin module");



@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminlmRoutingModule
  ]
})
export class AdminlmModule { }
