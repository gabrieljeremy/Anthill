import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule} from '@angular/material';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PropageComponent } from './propage/propage.component';
import { LoginComponent } from './login/login.component';
import { ServiceRequestComponent } from './service-request/service-request.component';
import { CreatePropageComponent } from './create-propage/create-propage.component';


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
     MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

