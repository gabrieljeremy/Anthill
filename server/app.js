//import models
require(`${process.cwd()}/models/account`)
require(`${process.cwd()}/models/professionalProfile`)
require(`${process.cwd()}/models/offer`)
require(`${process.cwd()}/models/request`)
const AccountController = require ('./controllers/accountsController.js')
const ProfessionalProfileController = require ('./controllers/professionalProfileController.js')
const OfferController = require ('./controllers/offerController.js')
const RequestController = require ('./controllers/requestController.js')
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
////////////   ROUTES FOR PROFESSIONAL PROFILES  ///////////////////////////////
server.route({
    method: 'POST',
    path:'/api/professionalProfile/create', 
    handler: ProfessionalProfileController.create
});
server.route({
    method: 'POST',
    path:'/api/professionalProfile/update', 
    handler: ProfessionalProfileController.update
});
server.route({
    method: 'POST',
    path:'/api/professionalProfile/getMyProPage', 
    handler: ProfessionalProfileController.getMyProPage
});
server.route({
    method: 'POST',
    path:'/api/professionalProfile/getAProPageById', 
    handler: ProfessionalProfileController.getAProPageById
});
////////////   ROUTES FOR REQUESTS  ///////////////////////////////
server.route({
    method: 'POST',
    path:'/api/requests/create', 
    handler: RequestController.create
});
server.route({
    method: 'POST',
    path:'/api/requests/update', 
    handler: RequestController.update
});
////////////   ROUTES FOR OFFERS  ///////////////////////////////
server.route({
    method: 'POST',
    path:'/api/offers/create', 
    handler: OfferController.create
});
server.route({
    method: 'POST',
    path:'/api/offers/update', 
    handler: OfferController.update
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