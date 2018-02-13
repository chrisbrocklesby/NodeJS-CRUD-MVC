//############## Imports ###############//
const {database, model} = require('../modules/database')


//############## User Model ###############//

const Post = database.define('post', {
  title: { type: model.STRING },
  content: { type: model.STRING }
})

Post.sync()

//############## Exports ###############//
exports.Post = Post