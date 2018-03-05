import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-user-valid',
  templateUrl: './user-valid.component.html',
  styleUrls: ['./user-valid.component.scss']
})
export class UserValidComponent implements OnInit {


  constructor( private router: Router) { }

  ngOnInit() {
    const loggedUser = sessionStorage.getItem('user');
    if (!loggedUser) { this.router.navigate(['../']); }

  }

}
