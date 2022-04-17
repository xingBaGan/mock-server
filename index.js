// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('db.json')
//使用默认中间件
const middlewares = jsonServer.defaults()
const path = require('path')
//通过JSON 生成router
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const rewrite = require('./rewrite.js')
server.use(
    jsonServer.rewriter(rewrite))
server.use(middlewares)


server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})