import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg: String;
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });

    $('.forgotPassword').click(function (e) {
      e.preventDefault();
      $('.dialogReset').toggleClass('hiddenForm');
    });

  }

  async onSubmit(user)  {
    const response = await this.userService.login(user as User);
      // console.log(response);
      if (response['message']) {
        this.msg = response['message'];
        console.log(response['message']);
      } else {
        sessionStorage.setItem('user',  JSON.stringify(response));
        this.router.navigate(['/portal']);
      }

  }

}
