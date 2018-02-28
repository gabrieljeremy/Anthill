const mongoose = require('mongoose')
const Account = mongoose.model('account')
const Boom =require('boom');
const bcrypt = require('bcrypt');


exports.hello = () => {
    return 'hello';
}

exports.createAccount = async (req,h) => {
    let account = await Account.findByEmail ( req.payload.email);
    if(!account){
       console.log('ok to save')
       const account = await new Account(req.payload);
       try{
        await account.save()
           account.password='';
           return account;
       }catch(e){
           console.log(e)
           return Boom.serverUnavailable('e');     
       }
    }
    else{ 
       return Boom.badData('Email already in use')
    }
    
}
exports.login = async (req,h) => {
    let account = await Account.findByEmail ( req.payload.email);
    if (bcrypt.compareSync(req.payload.password, account.password)){
        account.password='';
        return account;
    } 
    else return Boom.badData('Authentication failed')
}
exports.update = async (req,h) => {
    req.payload.status = 'active';
    
    try{
        let account = await Account.findByIdAndUpdate (req.payload._id, req.payload);
        
        return account;
         
    }catch(e){
           console.log(e)
           return Boom.serverUnavailable('e');    
    }
}