var path = require('path')

function createRoutes(router) {
    router.get('/', (req, res) => {
        res.render('home', {
            curr_home:true
        })
    })

    router.get('/about', (req, res) => {
        res.render('about', {
            curr_about:true
        })
    })

    router.get('/photos', (req, res) => {
        res.render('photos', {
            curr_photos:true
        })
    })
}

module.exports = {createRoutes}