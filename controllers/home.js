//############## Imports ###############//
const {webserver} = require('../modules/webserver')
const {User} = require('../models/user')

//############## Home Page ###############//
webserver.get('/', function (req, res) {

	User.create({ firstName: 'Sam', lastName: 'boster' })
	.then( user => { console.log("User Created: " + user.dataValues.firstName) })
	.catch( err => { console.log("Error: " + err.name) })

  res.render('home', { title: 'Hey', message: 'Hello there!' })

})

// Call Model from Data User
//User.findById(2).then( user => { console.log(user.firstName) })