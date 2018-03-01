import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostBinding } from '@angular/core';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
=======

>>>>>>> bc10598ddc1fc1f824e77b60f0195f3701082750


// Material ANGULAR
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatOptionModule } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';




// COMPONENT

import { AppComponent } from './app.component';


// ROUTES
<<<<<<< HEAD
import { RouterModule, Router, Routes } from '@angular/router';

=======
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
>>>>>>> bc10598ddc1fc1f824e77b60f0195f3701082750

// SERVICE
import { UserService } from './shared/services/user.service';
import { UserValidComponent } from './user-valid/user-valid.component';
import { MenuComponent } from './user-valid/menu/menu.component';
import { DashboardComponent } from './user-valid/dashboard/dashboard.component';
import { UserInvalidComponent } from './user-invalid/user-invalid.component';
import { LoginComponent } from './user-invalid/login/login.component';
import { RegisterComponent } from './user-invalid/register/register.component';




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
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

