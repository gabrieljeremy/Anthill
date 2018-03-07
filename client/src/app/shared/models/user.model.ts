export interface User {
  password: String;
  creationDate: Date;
  firstName: String;
  lastName: String;
  address: {
    street: String,
    zip: Number,
    city: String,
    country: String,
    geoLoc: {
      type: [Number],  // [<longitude>, <latitude>]
      required: false
    }
  };
  fixedPhone: Number;
  mobilePhone: Number;
  email: String;
  status: String;
}
