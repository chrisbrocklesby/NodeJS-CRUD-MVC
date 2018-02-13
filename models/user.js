//############## Imports ###############//
const {database, model} = require('../modules/database')


//############## User Model ###############//

const User = database.define('user', {
  firstName: { type: model.STRING },
  lastName: { type: model.STRING }
})

<<<<<<< HEAD
User.sync()
=======
//User.create({ firstName: 'bob', lastName: 'boster' })

>>>>>>> 72790b802cb9a119634debd480ebb29a4b0cafd2

//############## Exports ###############//
exports.User = User