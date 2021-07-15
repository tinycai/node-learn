var express = require('express')

var app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

// 公开指定目录
// app.use(express.static('public'))
app.use('/public', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})