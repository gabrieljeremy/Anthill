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
      
       account = await new Account(req.payload);
       try{
        await account.save()
           account.password='';
           return account;
       }catch(e){
           
           return `{ "message" : "`+e+`"}`      
       }
    }
    else{ 
       return `{ "message" : "email already in use"}`
    }
    
}
exports.login = async (req,h) => {
    let account = await Account.findByEmail ( req.payload.email);
    if (account){
        if (bcrypt.compareSync(req.payload.password, account.password)){
            account.password='';
            return account;
        } 
        else return `{ "message" : "password invalid"}`
    }
    else return `{ "message" : "email not found"}`
}
exports.update = async (req,h) => {
    req.payload.status = 'active';
    
    try{
        let account = await Account.findOneAndUpdate({email: req.payload.email}, req.payload);
        
       
        return Account.findByEmail(account.email);
         
    }catch(e){
           console.log(e)
           return `{ "message" : "`+e+`"}`  
    }
}