var http = require('http')
 
var server = http.createServer()

// requset 请求事件处理函数，需要接收两个参数：
//      Requset 请求对象
//              请求对象可以用来获取客户端的一些请求信息，例如请求路径
//      Response 响应对象
//               响应对象可以用来给客户端发送响应消息
server.on('request', (request, response) => {
  
  // 获取请求路径
  // http://127.0.0.1:3000/ /
  // http://127.0.0.1:3000/home /home
  // http://127.0.0.1:3000/login /login
  // http://127.0.0.1:3000/register /register
  console.log('接受到客户端的请求，请求路径为：', request.url);

  // response 对象有个方法：write可以用来给客户端发送响应数据
  // write 可以使用多次，但是最后一次一定要使用end来结束响应，否则客户端会一直等待
  if (request.url === '/') {
    response.write('home page')
  } else if(request.url === '/login') {
    response.write('login page')
  } else if(request.url === '/register') {
    response.write('register page')
  }

  // 告诉客户端，我的话说完了，可以呈递给客户了
  response.end()

 
})

server.listen(3000, () => {
  console.log('服务器开启了，路径为http://127.0.0.1:3000/')
})