//import models
require(`${process.cwd()}/models/account`)
require(`${process.cwd()}/models/professionalProfile`)
require(`${process.cwd()}/models/offer`)
require(`${process.cwd()}/models/request`)
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
server.route({
    method: 'GET',
    path:'/', 
    handler: async (request, h) =>{        

        return Account.hello();
    }
});


// Start the server
async function start() {

    try {
        await server.start();
        const mongoose = require('mongoose')
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://anthill:technocite2018@ds245238.mlab.com:45238/anthill_db',(err) => {
        if(err) console.log('db connection fail')
        console.log('mongodb connection success')
})

    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();