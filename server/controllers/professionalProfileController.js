const mongoose = require('mongoose');
const Account = mongoose.model('account');
const ProfesstionalProfile = mongoose.model('professionalProfile');


exports.create = async (req,h) => {
    let professionalProfile = await new ProfesstionalProfile(req.payload);
       try{
        await professionalProfile.save()           
           return professionalProfile;
       }catch(e){           
           return `{ "message" : "`+e+`"}`      
       }    
}

exports.update = async (req,h) => {  
    try{
        let professionalProfile = await ProfesstionalProfile.findByIdAndUpdate(req.payload.id, req.payload);
        return professionalProfile;
    }catch(e){           
           return `{ "message" : "`+e+`"}`  
    }
}