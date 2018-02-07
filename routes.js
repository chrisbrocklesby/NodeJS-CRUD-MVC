const {express} = require('./modules')

app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Web Server Listening on port 3000....'))
