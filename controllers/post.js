//############## Imports ###############//
const {webserver, upload} = require('../modules/webserver')
const {Post} = require('../models/post')


//############## Post Index ###############//
webserver.get('/post?', function (req, res) {

	Post.findAll().then( post => { 
	  res.send(post)
	})

})


//############## View Post ###############//
webserver.get('/post/:id?', function (req, res) {

	const id = req.params.id

	Post.findById(id).then( post => { 
	  if (post) { 
	  	res.send(post) 
	  } else {
	  	//res.status(404)
	  }
	})

})


//############## Delete Post ###############//
webserver.delete('/post/:id?', upload.array(), function (req, res) {

	const id = req.params.id

	Post.destroy({where: {id: id}})

})



// Call Model from Data User
//User.findById(2).then( user => { console.log(user.firstName) })

/*	Post.create({ title: 'Chris is cool', content: 'This is my Post' })
	.then( user => { console.log("Post Created: " + user.dataValues.title) })
	.catch( err => { console.log("Error: " + err) }) */