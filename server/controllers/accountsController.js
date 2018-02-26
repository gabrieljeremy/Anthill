const mongoose = require('mongoose')
const Account = mongoose.model('account')
const promisify = require('es6-promisify')


exports.hello = () => {
    return 'hello';
}
 