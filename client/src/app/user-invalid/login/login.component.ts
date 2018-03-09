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
    const dialog = $('.dialogReset');
    const form = $('.box_dialog');
    dialog.hide();
    form.hide();
    $('.forgotPassword').click(function (e) {
      e.preventDefault();
      if (dialog.hasClass('isHidden')) {
        dialog.fadeIn(100, function() {
          form.fadeIn(500);
          dialog.removeClass('isHidden');
        });
      } else {
        form.fadeOut(1000, function() {
          dialog.fadeOut(100);
          dialog.addClass('isHidden');
        });
      }

    });
    $('.closeReset').click(function (e) {
      e.preventDefault();
      form.fadeOut(500, function(){
        dialog.fadeOut(100);
        dialog.addClass('isHidden');
      });
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
