const express = require('express')
const routes = require('./src/routes').routes

const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express()

async function main() {
    app.use(bodyParser.urlencoded({ extended: false }))
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