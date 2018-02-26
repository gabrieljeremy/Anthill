const express = require('express')
const router = express.Router()
const accountController = require(`${process.cwd()}/controllers/accountController`)


router.get('/accounts', accountController.hello)


module.exports = router