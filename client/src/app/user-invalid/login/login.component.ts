import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit(user) {
    const response = this.userService.login(user as User);
    if (response['message']) {
      console.log(response['message']);
    } else {
      sessionStorage.setItem('user',  JSON.stringify(response));
    }
  }

}
