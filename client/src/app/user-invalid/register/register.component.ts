import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any;
  msg: any;


  constructor(public userService: UserService) { }

  ngOnInit() {
    // this.msg = this.userService.hello();
  }

  register() {
    this.userService.createUser(user as User)
    .subscribe(
        data => {
            console.log('Registration successful');

        },
        error => {
          console.log(error);
        });
  }

  // hello() {
  //   this.msg = this.userService.hello();
  // }

  // register() {
  //   this.loading = true;
  //   this.userService.create(this.model)
  //     .subscribe(
  //       data => {
  //         this.alertService.success('Registration successful', true);
  //         this.router.navigate(['/login']);
  //       },
  //       error => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //       });
  // }
}


