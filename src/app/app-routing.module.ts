import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './users/login/login.component'
import {SignupComponent} from './users/signup/signup.component'

const routes: Routes = [
  // {path:'login',component:LoginComponent},
  // {path:"signup",component:SignupComponent}
  
  {path:"adminlm",loadChildren:()=>import("./adminlm/adminlm.module")
  .then(mod=>mod.AdminlmModule)},
  {path:"userlm",loadChildren:()=>import("./userlm/userlm.module").then(mod=>mod.UserlmModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
