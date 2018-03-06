import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-professional-profile',
  templateUrl: './new-professional-profile.component.html',
  styleUrls: ['./new-professional-profile.component.scss']
})
export class NewProfessionalProfileComponent implements OnInit {
  loggedUser :User;
  proForm: FormGroup;
  
  constructor() {
    this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
   }

  ngOnInit() {
    this.proForm = new FormGroup({

    });
  }

}
