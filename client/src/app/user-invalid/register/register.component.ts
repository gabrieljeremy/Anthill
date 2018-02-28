import { Component, OnInit } from '@angular/core';


import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.userService.createUser(this.model);
  }

}
