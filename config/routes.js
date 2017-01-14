var Index = require('../app/constrollers/index')
var User = require('../app/constrollers/user')
var Movie = require('../app/constrollers/movie')
var _ = require('underscore')

module.exports = function (app) {
// pre handle user
    app.use(function (req, res, next) {
        var _user = req.session.user
        app.locals.user = _user
        next()
    })

    app.get('/', Index.index)

    app.post('/user/signup', User.signup)
    app.post('/user/signin', User.signin)
    app.get('/signin', User.showSignin)
    app.get('/signup', User.showSignup)
    app.get('/logout', User.logout)
    app.get('/admin/userlist', User.list)

    app.get('/movie/:id', Movie.detail)
    app.get('/admin/new', Movie.new)
    app.get('/admin/update/:id', Movie.update)
    app.post('/admin/movie', Movie.save)
    app.get('/movie/list', Movie.list)
    app.delete('/admin/list', Movie.del)
}