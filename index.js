const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./src/routes.js')
const router = express.Router()

// Initialize express app
const app = express()

// Use handlebars for view engine
// var hbs = exphbs.create({
//     helpers: {
//         if_eq: (a, b) => {}
//     }
// })
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// Allow sending static files such as css and images
app.use(express.static('public'))

// Setup routes for the site
routes.createRoutes(router)
app.use('/', router)

var listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port %s!', listener.address().port)
})
