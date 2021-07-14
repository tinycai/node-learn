var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

let messages = [
  {
    name: '张三',
    comment: '今天天气很好',
    time: new Date()
  },
  {
    name: '李四',
    comment: '想出去玩',
    time: new Date()
  },
  {
    name: '王五',
    comment: '杭州千岛湖',
    time: new Date()
  }
]

http.createServer((req, res) => {
  var parseUrl = url.parse(req.url, true)
  var pathName = parseUrl.pathname
  if (pathName === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) {
        return res.end('404 Not Found')
      }
      const htmlStr = template.render(data.toString(), {
        messages
      }) 
      return res.end(htmlStr)
    })
  } else if (pathName === '/post') {
    fs.readFile('./views/post.html', (err, data) => {
      if (err) {
        return res.end('404 Not Found')
      }
      return res.end(data)
    })
  } else if (pathName.indexOf('/public/') === 0) {
    fs.readFile(`.${pathName}`, (err, data) => {
      if (err) {
        return res.end('404 Not Found')
      }
      return res.end(data)
    })
  } else if (pathName === '/publish') {
    const tip = parseUrl.query
    tip['time'] = new Date()
    messages = [tip, ...messages]
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  } else {
    fs.readFile('./views/404.html', (err, data) => {
      if (err) {
        return res.end('404 Not Found')
      }
      return res.end(data)
    })
  }
}).listen(3000, () => {
  console.log('server is runing http://127.0.0.1:3000/')
  
})