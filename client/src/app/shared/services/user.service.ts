import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { RouterStateSnapshot, Router } from '@angular/router';


const HEADER = new HttpHeaders({ 'Content-type': 'application/json' });
const BASE_URL = 'http://localhost:8069/api';

@Injectable()
export class UserService {

  constructor(public http: HttpClient, public router: Router) { }


  createUser(user: User) {
    return this.http.post(`${BASE_URL}/accounts/createAccount`, JSON.stringify(user), {
      headers: HEADER
    })
      .toPromise()
      .catch(err => console.log(err.message));
  }


  updateUser(user: User) {
    return this.http.put(`${BASE_URL}/accounts/update`, JSON.stringify(user), {
      headers: HEADER
    })
      .toPromise()
      .catch(err => console.log(err.message));
  }


}
