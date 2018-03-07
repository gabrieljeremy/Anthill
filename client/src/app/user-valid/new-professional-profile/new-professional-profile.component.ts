import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AbstractControl, FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router, Routes } from '@angular/router';
import { ProfessionalProfileService } from '../../shared/services/professionalProfile.service';
import { ProfessionalProfile } from '../../shared/models/professionalProfile.model';

@Component({
  selector: 'app-new-professional-profile',
  templateUrl: './new-professional-profile.component.html',
  styleUrls: ['./new-professional-profile.component.scss']
})
export class NewProfessionalProfileComponent implements OnInit {

  loggedUser: User;
  proForm: FormGroup;
  msg: String;
  adressForm: FormGroup;


  constructor(private router: Router, private _fb: FormBuilder, public professionalProfileService: ProfessionalProfileService) {
    this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
    this.proForm = new FormGroup({});


  }




  ngOnInit() {

    const loggedUser = sessionStorage.getItem('user');
    if (!loggedUser) { this.router.navigate(['../']); }



    this.proForm = this._fb.group({
      companyName: ['ABC', Validators.required],
      vat: ['', Validators.required],
      sectors: ['', Validators.required],
      activities: ['', Validators.required],
      activityZone: ['', Validators.required],
      webSite: ['', Validators.required],
      contactFirstName: ['', Validators.required],
      contactLastName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      fixedPhone: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      address: this._fb.group({
        street: ['', Validators.required],
        zip: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required]
      })
    });


  }



  addPicture() {
    console.log('picture');
  }




  async save(proForm) {
    // call API to save customer
    console.log(this.proForm.value);
    console.log('ok Onregister');
    const response = await this.professionalProfileService.create( proForm as ProfessionalProfile);

    if (response['message']) {
      console.log(response['message']);
    } else {
      console.log(response['message']);
      this.msg = response['message'];
    }
  }

  // async onSubmit(valuesFromForm) {
  //   console.log(valuesFromForm);
  //   const newProfessionalProfile = {
  //     editors: [this.loggedUser],
  //     creationDate: Date.now(),
  //     companyName: valuesFromForm['companyName'],
  //     contactFirstName: valuesFromForm['contactFirstName'],
  //     contactLastName: valuesFromForm['contactLastName'],
  //     address: {
  //       street: valuesFromForm['contactFirstName'],
  //       zip: valuesFromForm['contactFirstName'],
  //       city: valuesFromForm['contactFirstName'],
  //       country: valuesFromForm['contactFirstName'],
  //       geoLoc: null
  //     },
  //     fixedPhone: valuesFromForm['contactFirstName'],
  //     mobilePhone: valuesFromForm['contactFirstName'],
  //     contactEmail: valuesFromForm['contactFirstName'],
  //     vat: valuesFromForm['contactFirstName'],
  //     webSite: valuesFromForm['contactFirstName'],
  //     sectors: valuesFromForm['contactFirstName'],
  //     activities: valuesFromForm['contactFirstName'],
  //     activityZone: valuesFromForm['contactFirstName'],
  //     pictures: ['pic1'],
  //     status: 'active'
  //   };


  //   console.log('ok Onregister');
  //   const response = await this.professionalProfileService.create( valuesFromForm as ProfessionalProfile);

  //   if (response['message']) {
  //     console.log(response['message']);
  //   } else {
  //     console.log(response['message']);
  //     this.msg = response['message'];
  //   }

  // }

}
