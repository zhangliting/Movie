var Movie = require('../models/movie')

// index page
exports.index = function (req, res) {
    console.log('user in session: ')
    console.log(req.session.user)

    // var _user = req.session.user
    // app.locals.user = _user

    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err)
        }

        res.render('index', {
            title: 'imooc 首页',
            movies: movies
        })
    })
}

