//############## Dependencies ###############//
const sequelize = require('sequelize')


//############## Database Module ###############//
const database = new sequelize('sqlite:./databases/database.sqlite')
//const database = new Sequelize('mysql://user:pass@example.com:9821/db_name', {})


//############## Exports ###############//
exports.database = database
exports.model = sequelize