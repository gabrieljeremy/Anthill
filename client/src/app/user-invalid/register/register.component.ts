import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';


declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  invalid: boolean;
  valid: boolean;




  constructor(public userService: UserService) {
  }




  ngOnInit() {

    $('.buttonSubscribe').click(function (e) {
      e.preventDefault();
      $('.registerForm').toggleClass('hiddenForm');
      $('.buttonSubscribe').toggleClass('hiddenForm');
    });

    $('.close').click(function (e) {
      e.preventDefault();
      $('.registerForm').toggleClass('hiddenForm');
      $('.buttonSubscribe').toggleClass('hiddenForm');
    });



    const invalid = true;
    const valid = false;
    console.log(invalid);

    this.userForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      'email': new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
      'password': new FormControl('', [Validators.required]),
      'confirmPassword': new FormControl('', [Validators.required])
    });
  }



  onRegister(user) {
    const pwd = this.userForm.value.password;
    const cpwd = this.userForm.value.confirmPassword;

    if (pwd === cpwd) {
      console.log(this.userForm.value);
      console.log('ok Onregister');
      this.userService.createUser(user as User);
      return this.valid = true;
    } else {
      console.log('error password');
      return this.invalid = false;

    }


  }

  Subscribebutton() {
    console.log('He is crazy i push the Subscribebutton! ');
  }


}
