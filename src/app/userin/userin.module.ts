import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserinRoutingModule } from './userin-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserinRoutingModule
  ]
})
export class UserinModule { }
