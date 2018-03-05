const mongoose = require('mongoose');
const Account = mongoose.model('account');
const Request = mongoose.model('request');
const Offer = mongoose.model('offer');
const ProfessionalProfile = mongoose.model('professionalProfile');



exports.create = async (req,h) => {
    let offer = await new Offer(req.payload);
       try{
        await offer.save()           
           return offer;
       }catch(e){           
           return `{ "message" : "`+e+`"}`      
       }    
}

exports.update = async (req,h) => {  
    try{
        let offer = await Offer.findByIdAndUpdate(req.payload.id, req.payload);
        return offer;
    }catch(e){           
           return `{ "message" : "`+e+`"}`  
    }
}