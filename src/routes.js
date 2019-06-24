var path = require('path')

function createRoutes(router) {
    router.get('/', (req, res) => {
        res.sendFile(path.resolve('public/pages/index.html'))
    })

    router.get('/about', (req, res) => {
        res.sendFile(path.resolve('public/pages/about.html'))
    })

    router.get('/photos', (req, res) => {
        res.sendFile(path.resolve('public/pages/photos.html'))
    })
}

module.exports = {createRoutes}