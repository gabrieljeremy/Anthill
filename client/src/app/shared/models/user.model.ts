export interface User {
  password: String;
  creationDate: Date;
  firstName: String;
  lastName: String;
  address: {
    street: String,
    zip: String,
    city: String,
    country: String,
    geoLoc: {
      type: [Number],  // [<longitude>, <latitude>]
      index: '2d',      // create the geospatial index
      required: false
    }
  };
  fixedPhone: String;
  mobilePhone: String;
  email: String;
  status: String;
}
