import { User } from '../../shared/models/user.model';
import { Address } from '../../shared/models/adress.model';


export interface ProfessionalProfile {

  editors: User[];
  creationDate: {
    type: any,
    required: true,
  };
  companyName: {
    type: String,
    required: true,
    unique: true
  };
  contactFirstName: {
    type: String,
    require: true
  };
  contactLastName: {
    type: String,
    required: true
  };
  address: Address[];

  fixedPhone: {
    type: String
  };
  mobilePhone: {
    type: String
  };
  contactEmail: {
    type: String,
    required: true
  };
  vat: {
    type: String,
    unique: true
  };
  webSite: {
    type: String,
    required: true
  };
  sectors: {
    type: String,
    required: true
  };
  activities: {
    type: String,
    required: true
  };
  activityZone: {
    type: Number,
    required: true
  };
  pictures: {
    type: String[]
  };
  status: {
    type: String,
    required: true,
    default: 'active'
  };

}


