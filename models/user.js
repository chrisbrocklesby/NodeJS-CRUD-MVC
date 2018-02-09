//############## Imports ###############//
const {database, model} = require('../modules/database')


//############## User Model ###############//

const User = database.define('user', {
  firstName: { type: model.STRING },
  lastName: { type: model.STRING }
})

//User.create({ firstName: 'bob', lastName: 'boster' })


//############## Exports ###############//
exports.User = User