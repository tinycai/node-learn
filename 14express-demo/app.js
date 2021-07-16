var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.engine('html', require('express-art-template'))

app.use('/public', express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


let list = [
  {
    name: '张三',
    age: 18,
    comment: '今天天气不错',
    date: new Date()
  },
  {
    name: '张三22',
    age: 19,
    comment: 'Hello world',
    date: new Date()
  },
  {
    name: '张三33',
    age: 20,
    comment: 'have a try',
    date: new Date()
  }
]

app.get('/', (req, res) => {
  res.render('index.html', {
    list
  })
})

app.get('/post', (req, res) => {
  res.render('post.html')
})

app.post('/post', (req, res) => {
  const tip = req.body
  tip['date'] = new Date()
  list = [tip, ...list]
  res.redirect('/')
})


app.get('/publish', (req, res) => {
  const input = req.query
  input['date'] = new Date()
  list = [input, ...list]
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('Server is runing http://127.0.0.1:3000')
})