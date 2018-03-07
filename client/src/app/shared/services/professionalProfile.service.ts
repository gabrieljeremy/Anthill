import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfessionalProfile } from '../models/professionalProfile.model';
import { User } from '../models/user.model';


const HEADER = new HttpHeaders({ 'Content-type': 'application/json' });
const BASE_URL = 'http://localhost:8069/api';

@Injectable()
export class ProfessionalProfileService {

  constructor(private http: HttpClient) { }


  create(professionalProfile: ProfessionalProfile) {
    return this.http.post(`${BASE_URL}/professionalProfile/create`, JSON.stringify(professionalProfile), {
      headers: HEADER
    })
      .toPromise()
      .catch(err => console.log(err.message));
  }
  getMyProfessionalProfile(user:User){
    return this.http.post(`${BASE_URL}/professionalProfile/getMyProPage`, JSON.stringify(user), {
      headers: HEADER
    })
      .toPromise()
      .catch(err => console.log(err.message));
  }
  getAProfessionalProfileById(professionalProfileID:String){
    return this.http.post(`${BASE_URL}/professionalProfile/getAProPageById`, '{_Id :"'+professionalProfileID+'"}', {
      headers: HEADER
    })
      .toPromise()
      .catch(err => console.log(err.message));
  }
  update(professionalProfile: ProfessionalProfile) {
    return this.http.post(`${BASE_URL}/professionalProfile/update`, JSON.stringify(professionalProfile), {
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
