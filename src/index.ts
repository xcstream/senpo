import 'source-map-support/register'
import * as express from 'express'
import HomeController from './controller/HomeController'
import UserController from './controller/UserController'
import db from './service/db'

var app = express()

new HomeController(app)
new UserController(app)

app.set('db',new db())

app.listen(7000)
console.log('http://localhost:7000/')

