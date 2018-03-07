import { User } from '../../shared/models/user.model';

export interface ProfessionalProfile {
    
    editors: User[],
    creationDate: {
        type: any,
        required: true,
            
    },
    companyName: {
        type: String,
        required: true,
        unique :true
    },
    contactFirstName: {
        type: String,
        require: true
    },
    contactLastName: {
        type: String,
        required: true
    },
    address: {
        street: String,
        zip: String,
        city:String,
        country:String,
        geoLoc: {
          type: [Number],  // [<longitude>, <latitude>]
          index: '2d',      // create the geospatial index
          require: true
        }
    },
    fixedPhone: {
        type: String
    },
    mobilePhone: {
        type: String
    },
    contactEmail: {
        type: String,
        required: true    
    },
    vat: {
        type: String,
        unique: true
    },
    webSite: {
        type: String,
        required: true
    },
    sectors: {
        type: String,
        required: true
    },
    activities: {
        type: String,
        required: true
    },
    activityZone:{
        type : Number,
        required : true
    },
    pictures: {
        type: String[]
    },
    status: {
        type: String,
        required: true,
        default: 'active'
    }

}
  
  