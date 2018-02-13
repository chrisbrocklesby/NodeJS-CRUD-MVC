//############## Dependencies ###############//
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer') // for parsing multipart/form-data


//############## Web Server Module ###############//
const webserver = express()
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