const mongoose = require('mongoose');
const Account = mongoose.model('account');
const ProfessionalProfile = mongoose.model('professionalProfile');


exports.create = async (req,h) => {
    let professionalProfile = await new ProfessionalProfile(req.payload);
       try{
        await professionalProfile.save()           
           return professionalProfile;
       }catch(e){           
           return `{ "message" : "`+e+`"}`      
       }    
}

exports.update = async (req,h) => {  
    try{
        let professionalProfile = await ProfessionalProfile.findByIdAndUpdate(req.payload.id, req.payload);
        return professionalProfile;
    }catch(e){           
           return `{ "message" : "`+e+`"}`  
    }
}
exports.getAProPageById = async (req,h) => {  
    try{
        let professionalProfile = await ProfessionalProfile.findById(req.payload._id);
        if(professionalProfile) return professionalProfile;
        else return `{ "message" : "Company not found"}`
    }catch(e){           
           return `{ "message" : "`+e+`"}`  
    }
}
exports.getMyProPage = async (req,h) => {  
    try{
        let professionalProfile = await ProfessionalProfile.findOne({editors: req.payload._id}) ;
        if(professionalProfile) return professionalProfile;
        else return `{ "message" : "Company not found"}`
    }catch(e){           
           return `{ "message" : "`+e+`"}`  
    }
}