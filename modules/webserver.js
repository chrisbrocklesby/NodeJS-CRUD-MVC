//############## Dependencies ###############//
const express = require('express')
<<<<<<< HEAD
const bodyParser = require('body-parser')
const multer = require('multer') // for parsing multipart/form-data
=======
>>>>>>> 72790b802cb9a119634debd480ebb29a4b0cafd2


//############## Web Server Module ###############//
const webserver = express()
<<<<<<< HEAD
const upload = multer() // for parsing multipart/form-data

webserver.use(express.static('static'))
webserver.set('view engine', 'ejs')
webserver.disable( 'x-powered-by' )
webserver.use(bodyParser.json()) // for parsing application/json
webserver.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

webserver.listen(3000, () => console.log('Web Server Started...'))


//############## Exports ###############//
exports.webserver = webserver
exports.upload = upload
=======

webserver.use(express.static('static'))
webserver.set('view engine', 'ejs')

webserver.listen(3000, () => console.log('Web Server Started...'))

//############## Exports ###############//
exports.webserver = webserver
>>>>>>> 72790b802cb9a119634debd480ebb29a4b0cafd2
