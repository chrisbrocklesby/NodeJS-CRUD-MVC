//############## Imports ###############//
const {webserver} = require('../modules/webserver')
const {User} = require('../models/user')

//############## Home Page ###############//
webserver.get('/', function (req, res) {
  res.render('home', { title: 'Hey', message: 'Hello there!' })
})

// Call Model from Data User
User.findById(1).then( user => { console.log(user.firstName) })