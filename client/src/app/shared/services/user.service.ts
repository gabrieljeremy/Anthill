import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { RouterStateSnapshot, Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';

const HEADER = new HttpHeaders({ 'Content-type': 'application/json' });
// const BASE_URL = 'http://localhost:8069/api';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  // createUser(user: User) {
  //   return this.http.post(`http://localhost:8069/api/accounts/createAccount`, JSON.stringify(user), {
  //     headers: HEADER
  //   })
  //     .toPromise()
  //     .catch(err => console.log(err.message));
  // }
  hello() {
    return this.http.get(`http://localhost:8069/api/accounts`);

  }


  // updateUser(user: User) {
  //   return this.http.put(`${BASE_URL}/accounts/update`, JSON.stringify(user), {
  //     headers: HEADER
  //   })
  //     .toPromise()
  //     .catch(err => console.log(err.message));
  // }


}
