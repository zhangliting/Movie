/**
 * Created by zhangliting on 2017/1/3.
 */
var express = require('express')
var path = require('path')

var session = require('express-session')
var mongoose = require('mongoose')
var mongoStore = require('connect-mongo')(session)
var logger = require('morgan')

var bodyParser = require('body-parser')
//var cookieParser = require('cookie-parser')


var port = process.env.PORT || 3001
var app = express();
var dbUrl = 'mongodb://localhost/imooc'

mongoose.connect(dbUrl)


app.set('views', './app/views/pages')
app.set('view engine', 'jade')
// app.use(express.bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.cookieParser())
app.use(session({
    secret: 'imooc',
    resave: false,
    saveUninitialized:true,
    store: new mongoStore({
        url:dbUrl,
        collection: 'sessions'
    })
}))

if('development' === app.get('env')){
    app.set('showStackError', true)
    app.use(logger(':method :url :status'))
    app.locals.pretty = true
    mongoose.set('debug', true)
}

require('./config/routes')(app)

app.locals.moment = require('moment')
app.listen(port)


console.log('movie started on port ' + port)


