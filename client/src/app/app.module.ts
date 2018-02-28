import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostBinding } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Material ANGULAR
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatOptionModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';




// COMPONENT

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PropageComponent } from './propage/propage.component';
import { LoginComponent } from './login/login.component';
import { ServiceRequestComponent } from './service-request/service-request.component';
import { CreatePropageComponent } from './create-propage/create-propage.component';



// ROUTES
import { RouterModule, Router, Routes } from '@angular/router';


import { HttpModule } from '@angular/http';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', component: PropageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: AppComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PropageComponent,
    LoginComponent,
    ServiceRequestComponent,
    CreatePropageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

