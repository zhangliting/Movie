var User = require('../models/user')

// signup
exports.signup = function (req, res) {
    var _user = req.body.user

    User.find({name: _user.name}, function (err, user) {
        if (err) {
            console.log(err)
        }

        if (user) {
            return res.redirect('/signin')
        }
        else {
            var user = new User(_user)
            user.save(function (err, user) {
                if (err) {
                    console.log(user)
                }
                res.redirect('/')

            })
        }

    })

}


// signin
exports.signin = function (req, res) {
    var _user = req.body.user
    var name = _user.name
    var password = _user.password

    User.findOne({name: name}, function (err, user) {
        if (err) {
            console.log(err)
        }

        if (!user) {
            return res.redirect('/signup')
        }

        user.comparePassword(password, function (err, isMatch) {
            if (err) {
                console.log(err)
            }

            if (isMatch) {
                req.session.user = user
                console.log('password is matched!')
                return res.redirect('/')
            } else {
                return res.redirect('/signin')
                console.log('Password is wrong!')
            }

        })

    })
}
// logout
exports.logout = function (req, res) {
    delete req.session.user

    res.redirect('/')

}
// User list page
exports.list = function (req, res) {

    User.fetch(function (err, users) {
        if (err) {
            console.log(err)
        }

        res.render('userlist', {
            title: 'imooc 用户列表页',
            users: users
        })
    })
}

exports.showSignup = function (req, res) {
    res.render('signup',{
        title:'注册页面'
    })

}

exports.showSignin = function (req, res) {
    res.render('signin',{
        title:'登陆页面'
    })

}