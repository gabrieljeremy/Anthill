import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  loggedUser: User;

  constructor() {
    this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
   }

  ngOnInit() {
    const loggedUser = sessionStorage.getItem('user');
  }

}
