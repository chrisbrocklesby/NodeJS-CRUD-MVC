//############## Dependencies ###############//
const express = require('express')


//############## Web Server Module ###############//
const webserver = express()

webserver.use(express.static('static'))
webserver.set('view engine', 'ejs')

webserver.listen(3000, () => console.log('Web Server Started...'))

//############## Exports ###############//
exports.webserver = webserver