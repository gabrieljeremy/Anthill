import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { ProfessionalProfileService } from '../../../shared/services/professionalProfile.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
  loggedUser :User;
  ProPopup: boolean;

  constructor(public professionalProfileService: ProfessionalProfileService) {
    this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
   }

  ngOnInit() {
    
    this.ProPopup = false;
    
  }

  GoToProfile(){
    console.log('Go to profile')
  }
  async GoToProPage(){
    
    const response =  await this.professionalProfileService.getMyProfessionalProfile(this.loggedUser);
    if(response['message']){
      console.log(response)
      this.ProPopup = true;
    }
    else{
      console.log(response)
      this.ProPopup = false;
    }
    
  }
  CancelGoToProPage(){
    this.ProPopup = false;
  }
  GoToSearch(){
    console.log('Go to Search')
  }

}
