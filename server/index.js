const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("hello http")
    res.end()
});


server.listen(3009,()=>{
    console.log("server is running on port 3009 ......")
})