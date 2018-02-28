import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { RouterStateSnapshot, Router } from '@angular/router';


const HEADER = new HttpHeaders({ 'Content-type': 'application/json' });
const BASE_URL = 'http://localhost:8069/api/accounts/createAccount';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {}

  postUser(user: User) {
    this.http
      .post(`${BASE_URL}`, JSON.stringify(user), {
        headers: HEADER
      })
      .toPromise()
      .catch(err => console.log(err.message));
  }

}
