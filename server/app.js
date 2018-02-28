//import models
require(`${process.cwd()}/models/account`)
require(`${process.cwd()}/models/professionalProfile`)
require(`${process.cwd()}/models/offer`)
require(`${process.cwd()}/models/request`)
const AccountController = require ('./controllers/accountsController.js')
///////////////////////////////////
const mongoose = require('mongoose');
const Hapi = require('hapi');
const Account = mongoose.model('account')



// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8069 ,
    routes:{cors:{origin:['*']}}
});

// Add the route
////////////   ROUTES FOR ACCOUNTS ///////////////////////////////
server.route({
    method: 'Get',
    path:'/api/accounts', 
    handler: AccountController.hello
});
server.route({
    method: 'POST',
    path:'/api/accounts/createAccount', 
    handler: AccountController.createAccount
});
server.route({
    method: 'POST',
    path:'/api/accounts/login', 
    handler: AccountController.login    
});
server.route({
    method: 'POST',
    path:'/api/accounts/update', 
    handler: AccountController.update    
});

server.route({
    method: 'GET',
    path:'/api/accounts/login', 
    handler: AccountController.login    
});

server.route({
    method: 'GET',
    path:'/api/accounts/login', 
    handler: AccountController.login    
});


// Start the server
async function start() {

    try {
        await server.start();
        const mongoose = require('mongoose')
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://anthill:technocite2018@ds245238.mlab.com:45238/anthill_db',(err) => {
            if(err) console.log('db connection fail')
            else console.log('mongodb connection success')
        })

    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();