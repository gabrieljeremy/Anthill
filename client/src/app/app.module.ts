import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostBinding } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// Material ANGULAR
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatOptionModule } from '@angular/material';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENT

import { AppComponent } from './app.component';
import { UserValidComponent } from './user-valid/user-valid.component';
import { MenuComponent } from './user-valid/menu/menu.component';
import { DashboardComponent } from './user-valid/dashboard/dashboard.component';
import { UserInvalidComponent } from './user-invalid/user-invalid.component';
import { LoginComponent } from './user-invalid/login/login.component';
import { RegisterComponent } from './user-invalid/register/register.component';



// ROUTES
import { RouterModule, Router, Routes } from '@angular/router';


// SERVICE
import { UserService } from './shared/services/user.service';
import { AsideMenuComponent } from './user-valid/dashboard/aside-menu/aside-menu.component';
import { MyRequestsComponent } from './user-valid/dashboard/my-requests/my-requests.component';



const routes: Routes = [
  { path: '', component: UserInvalidComponent },
  { path: 'portal', component: UserValidComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserValidComponent,
    MenuComponent,
    DashboardComponent,
    UserInvalidComponent,
    LoginComponent,
    RegisterComponent,
    AsideMenuComponent,
    MyRequestsComponent,

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

