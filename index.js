const express = require('express')
const routes = require('./src/routes').routes
const db = require('./src/db')

const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express()

main = async () => {
    app.use(bodyParser.json())
    routes(app)

    app.get('/', (req, res) => {
        res.send('Renter is walking')
    })
    app.listen(port, () => {
        console.log('Server is running')
    })
}

main()