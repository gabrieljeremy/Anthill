import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

declare var $: any;

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

    $('.forgotPassword').click(function (e) {
      e.preventDefault();
      $('.dialogReset').toggleClass('hiddenForm');
    });
  }

  async onSubmit(user)  {
    const response = await this.userService.login(user as User)
    
      console.log(response);
      if (response['message']) {
        console.log(response['message']);
      } else {
        sessionStorage.setItem('user',  JSON.stringify(response));
      }
    
  }

}
