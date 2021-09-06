import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersModule} from './users/users.module'
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider';
// import {MDBBootstrapModule} from 'angular-bootstrap-md'
import { MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import { ReactiveFormsModule } from '@angular/forms'


import { UserComponent } from './user/user.component';
import { CustomStyleDirective } from './custom-style.directive'
import {HttpClientModule} from '@angular/common/http'
import {AdminModule} from './admin/admin.module'
import {UserinModule} from './userin/userin.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserComponent,
    CustomStyleDirective,
    UserlistComponent,
    AdminlistComponent
  ],
  imports: [ReactiveFormsModule,
    MDBBootstrapModulesPro,
    // MDBSpinningPreloader,
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    AdminModule,
    UserinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
