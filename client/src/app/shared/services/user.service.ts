import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';


const HEADER = new HttpHeaders({ 'Content-type': 'application/json' });
const BASE_URL = 'http://localhost:8069/api';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  createUser(user: User) {
    return this.http.post(`${BASE_URL}/accounts/createAccount`, JSON.stringify(user), {
      headers: HEADER
    })
      .toPromise()
      .catch(err => console.log(err.message));
  }

  login(user: User) {
    console.log(user);
    return this.http.post(`${BASE_URL}/accounts/login`, JSON.stringify(user), {
      headers: HEADER
    })
      .toPromise()
      .catch(err => console.log(err.message));
  }

  // hello() {
  //   return this.http.get(`${BASE_URL}/api/accounts`).subscribe((res) => {
  //     console.log(res);
  //   });


    // updateUser(user: User) {
    //   return this.http.put(`${BASE_URL}/accounts/update`, JSON.stringify(user), {
    //     headers: HEADER
    //   })
    //     .toPromise()
    //     .catch(err => console.log(err.message));
    // }


  }
