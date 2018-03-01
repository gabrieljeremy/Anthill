import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  User: any = {};
  msg:any;
  loading = false;

  constructor(public userService: UserService) { }

  ngOnInit() {
    //this.msg = this.userService.hello()
  }

  // register() {
  //   this.userService.createUser(user as User);
  // }

}
