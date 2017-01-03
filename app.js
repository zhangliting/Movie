/**
 * Created by zhangliting on 2017/1/3.
 */
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var app = express();

app.set('views', './views/pages')
app.set('view engine', 'jade')
// app.use(express.bodyParser())
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('movie started on port ' + port)

// index page
app.get('/', function (req, res) {
    res.render('index', {
        title: 'imooc 首页',
        movies:[{
            title: '机械战警',
            _id: 1,
            poster: 'http://img.bizhi.sogou.com/images/2012/04/13/236597.jpg'},
            {
                title: '机械战警',
                _id: 1,
                poster: 'http://img.bizhi.sogou.com/images/2012/04/13/236597.jpg'},
            {
                title: '机械战警',
                _id: 1,
                poster: 'http://img.bizhi.sogou.com/images/2012/04/13/236597.jpg'},
            {
                title: '机械战警',
                _id: 1,
                poster: 'http://img.bizhi.sogou.com/images/2012/04/13/236597.jpg'}
        ]
    })
})

// detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'imooc 详情页',
        movie: {
            doctor: '何塞.帕迪利亚',
            country: '美国',
            title: '机械战警',
            year: 2014,
            poster: 'http://img.bizhi.sogou.com/images/2012/04/13/236597.jpg',
            language: '英语',
            flash: 'http://v.youku.com/v_show/id_XMTg5MjA2MDI2MA==.html',
            summary: 'Test'
        }
    })
})

// admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页',
        movie:{
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    })
})

// list page
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'imooc 列表页',
        movies: [{
            title: '机械战警',
            _id: 1,
            doctor: '何塞.帕迪利亚',
            country: '美国',
            title: '机械战警',
            year: 2014,
            poster: 'http://img.bizhi.sogou.com/images/2012/04/13/236597.jpg',
            language: '英语',
            flash: 'http://v.youku.com/v_show/id_XMTg5MjA2MDI2MA==.html',
            summary: 'Test'
        }]
    })
})