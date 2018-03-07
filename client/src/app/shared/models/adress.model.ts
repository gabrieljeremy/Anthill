export interface Address {

  street: String;
  zip: String;
  city: String;
  country: String;
  geoLoc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d',      // create the geospatial index
    require: true
  };
}
