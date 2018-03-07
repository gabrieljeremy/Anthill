import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AbstractControl,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  
  loggedUser :User;
  proForm: FormGroup;
  msg:String;
  
  constructor(private router: Router,fb: FormBuilder, public professionalProfileService :ProfessionalProfileService) {
    this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
    this.proForm = new FormGroup({});    
    this.proForm = fb.group({
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
      street:['', Validators.required],
      zip:['', Validators.required],
      city:['', Validators.required],
      country:['', Validators.required]
    
    });


   }

  async ngOnInit() {
    const loggedUser = await sessionStorage.getItem('user');
    if (!loggedUser) { this.router.navigate(['../']); }

    

    
  }

  addPicture(){
    console.log('picture')
  }
  async onSubmit(valuesFromForm) {
    console.log(valuesFromForm);      
      let newProfessionalProfile={
        editors: null,
      creationDate: null,
      companyName: valuesFromForm['companyName'],
      contactFirstName: valuesFromForm['contactFirstName'],
      contactLastName:  valuesFromForm['contactLastName'],
      address: {
          street:  valuesFromForm['contactFirstName'],
          zip:  valuesFromForm['contactFirstName'],
          city: valuesFromForm['contactFirstName'],
          country: valuesFromForm['contactFirstName'],
          geoLoc: null
      },
      fixedPhone: valuesFromForm['contactFirstName'],
      mobilePhone:  valuesFromForm['contactFirstName'],
      contactEmail:  valuesFromForm['contactFirstName'],
      vat:  valuesFromForm['contactFirstName'],
      webSite:  valuesFromForm['contactFirstName'],
      sectors:  valuesFromForm['contactFirstName'],
      activities:  valuesFromForm['contactFirstName'],
      activityZone: valuesFromForm['contactFirstName'],
      pictures: ['pic1'],
      status:  'active'
      };
      newProfessionalProfile.editors.push(this.loggedUser)

      console.log('ok Onregister');
      const response = await this.professionalProfileService.create(newProfessionalProfile);

      if (response['message']) {
        console.log(response['message']);
      }
      else {
        console.log(response['message']);
        this.msg = response['message'];
      }
        
    }
     
}
