const http = require('http')
const PORT = 3000;

const server = http.createServer((req,res)=>{
    if(req.url='/contact'){
        res.write("Clicked");
    }
})

server.listen(PORT,()=>{
    console.log("server is running")
})