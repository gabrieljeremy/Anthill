import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostBinding } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Material ANGULAR
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatOptionModule } from '@angular/material';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';




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


// RESOLVER
// import { UserResolver } from './shared/resolvers/user.resolvers';



const appRoutes: Routes = [
  { path: '', component: UserInvalidComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '*', redirectTo: '' }
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
    RouterModule.forRoot(appRoutes),
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

