var http = require('http')

var server = http.createServer()

server.on('request', (req, res) => {
  if (req.url === '/') {
    res.end('home page')
  } else if(req.url === '/login') {
    res.end('login page')
  } else if(req.url === '/products') {
    const list = [
      {
        id: 1,
        name: 'iphone',
        price: 1222
      },
      {
        id: 2,
        name: 'iphone 3',
        price: 3222
      },
      {
        id: 3,
        name: 'iphone 4',
        price: 1222
      }
    ]
    // 响应内容只能是二进制数据或者字符串
    res.end(JSON.stringify(list))
  } else {
    res.end('404 not fond')
  }
})

server.listen(3000, () => {
  console.log('服务器连接成功，地址为http://127.0.0.1:3000/')
})