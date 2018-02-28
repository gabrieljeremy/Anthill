import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import { User } from '../shared/models/user.model';
import { UserService } from '../shared/user.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // registreUser: FormGroup;


  // constructor(fb: FormBuilder, public movieService: UserService) {
  //   this.registreUser = fb.group({
  //     email: [''],
  //     password: ['']
  //   });
  //  }

  constructor() {}

  ngOnInit() {}



  // onSubmit(user) {
  //   if (this.registreUser.controls['email'].valid) {
  //     this.UserService.postUser(user as User);
  //   } else {
  //     console.log('form not valid');
  //   }
  // }

}

