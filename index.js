const express = require('express')
const routes = require('./src/routes.js')
const router = express.Router()


// Initialize express app
const app = express()
const port = 3000

app.use(express.static('public'))

routes.createRoutes(router)
app.use('/', router)
var listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port %s!', listener.address().port)
})
