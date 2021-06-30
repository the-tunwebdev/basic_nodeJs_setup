const http = require('http');
const app = require('./app');
const PORT = 8080
const server =  http.createServer(app)
app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})
server.listen(PORT,()=>{
    console.log('server is working')
})