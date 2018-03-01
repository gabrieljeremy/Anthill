import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

// import { CustomValidators } from '../../shared/validator';


import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  invalid: boolean;



  constructor(public userService: UserService) {
  }



  ngOnInit() {
    const invalid = true;
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
    const pwd = this.userForm.get('password');
    const cpwd = this.userForm.get('confirm_password');

    if (pwd === cpwd) {
      // this.userForm.removeControl('confirmPassword');
      console.log(this.userForm.value);
      console.log('ok Onregister');
      this.userService.createUser(user as User);
      // this.userForm.reset('confirmPassword');

    } else {
      console.log('error password');
      return this.invalid = false;

    }


  }


}
