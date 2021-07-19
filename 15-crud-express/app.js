const express = require('express')
var bodyParser = require('body-parser')
const fs = require('fs')
const router = require('./router')

const app = express()

app.engine('html', require('express-art-template'))

app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router)


app.listen(3000, () => {
  console.log('server is running http://127.0.0.1:3000')
  
})