import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostBinding } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Material ANGULAR
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatOptionModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';




// COMPONENT

import { AppComponent } from './app.component';


// ROUTES
import { RouterModule, Router, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// SERVICE
import { UserService } from './shared/services/user.service';
import { UserValidComponent } from './user-valid/user-valid.component';
import { MenuComponent } from './user-valid/menu/menu.component';
import { DashboardComponent } from './user-valid/dashboard/dashboard.component';
import { UserInvalidComponent } from './user-invalid/user-invalid.component';
import { LoginComponent } from './user-invalid/login/login.component';
import { RegisterComponent } from './user-invalid/register/register.component';



export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: AppComponent },

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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

