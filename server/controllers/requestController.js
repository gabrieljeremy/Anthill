const mongoose = require('mongoose');
const Account = mongoose.model('account');
const Request = mongoose.model('request');


exports.create = async (req,h) => {
    let request = await new Request(req.payload);
       try{
        await request.save()           
           return request;
       }catch(e){           
           return `{ "message" : "`+e+`"}`      
       }    
}

exports.update = async (req,h) => {  
    try{
        let request = await Request.findByIdAndUpdate(req.payload.id, req.payload);
        return request;
    }catch(e){           
           return `{ "message" : "`+e+`"}`  
    }
}